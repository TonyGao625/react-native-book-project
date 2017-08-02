using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure.Interception;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using Book.Business.ConvertModel;
using Book.DataAccess;
using Book.DataModel;
using Book.EntityModel;

namespace Book.Business
{
    public class BookCollectionBusiness
    {
        private readonly BookCollectionAgent _bookCollectionAgent;
        private readonly BookBorrowAgent _bookBorrowAgent;

        public BookCollectionBusiness()
        {
            _bookCollectionAgent = new BookCollectionAgent();
            _bookBorrowAgent = new BookBorrowAgent();
        }

        public async Task<MuliResult<BookCollectionModel>> GetCollectionList(int userId)
        {
            var result = new MuliResult<BookCollectionModel>();
            try
            {
                var datalist = await _bookCollectionAgent.GetCollectList(userId);
                result.Datas = datalist.Select(x => x.ToBookCollectionModel()).ToList();
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }

        /// <summary>
        /// 借阅单
        /// </summary>
        /// <param name="collectList"></param>
        /// <param name="userId"></param>
        /// <param name="borrowDate"></param>
        /// <returns></returns>
        public async Task<Operate> BorrowBook(List<BookCollectionModel> collectList, int userId, DateTime borrowDate)
        {
            var result = new Operate();
            try
            {
                var hasBookBorrow = false;
                var message = "";
                foreach (var item in collectList)
                {
                    //if the book has been borrow and not return
                    var hasBorrow = await _bookBorrowAgent.GetBorrowBookByBookId(item.BookId);
                    if (hasBorrow != null)
                    {
                        message = message + "," + hasBorrow.BookInfo.BookName;
                        hasBookBorrow = true;
                    }
                }
                if (hasBookBorrow)//the book have been borrow
                {
                    result.Status = 2;
                    result.Message = message.Substring(1) + "已被借阅，是否要继续借阅剩下的书？";
                    return result;
                }

                await SureBorrowBook(collectList, userId, borrowDate);
                result.Status = 1;
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }

        public async Task<Operate> SureBorrowBook(List<BookCollectionModel> collectList, int userId, DateTime borrowDate)
        {
            var result = new Operate();
            try
            {
                using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    var borrowCount = 0;
                    foreach (var item in collectList)
                    {
                        var hasBorrow = await _bookBorrowAgent.GetBorrowBookByBookId(item.BookId);
                        if (hasBorrow == null)
                        {
                            var borrow = new BookBorrow()
                            {
                                BookId = item.BookId,
                                UserId = userId,
                                BorrowDate = borrowDate,
                                NeedReturnDate = borrowDate.AddMonths(1) //1 month to return
                            };
                            //add book to borrow list
                            await _bookBorrowAgent.AddOrUpdate(borrow);
                            //delete book from borrow order
                            await _bookCollectionAgent.DeleteById(item.Id);
                            borrowCount = borrowCount + 1;
                        }
                    }
                    result.Message = (borrowCount == 0) ? "没有可借阅的书" : "成功借阅";
                    scope.Complete();
                }
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }


        public async Task<Operate> DeleteCollectionByIds(int[] ids)
        {
            var result = new Operate();
            try
            {
                using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    foreach (var id in ids)
                    {
                        await _bookCollectionAgent.DeleteById(id);
                    }
                    scope.Complete();
                }
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }
    }
}
