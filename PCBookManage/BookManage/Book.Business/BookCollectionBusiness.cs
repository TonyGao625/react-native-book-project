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
            _bookBorrowAgent=new BookBorrowAgent();
        }

        public async Task<MuliResult<BookCollectionModel>> GetCollectionList(int userId)
        {
            var result=new MuliResult<BookCollectionModel>();
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
            var result=new Operate();
            try
            {
                using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    foreach (var item in collectList)
                    {
                        var borrow = new BookBorrow()
                        {
                            BookId = item.BookId,
                            UserId = userId,
                            BorrowDate = borrowDate
                        };
                        //add book to borrow list
                        await _bookBorrowAgent.AddOrUpdate(borrow);
                        //delete book from borrow order
                        await _bookCollectionAgent.DeleteById(item.Id);
                    }
                    scope.Complete();

                    result.Message = "借阅成功";
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
