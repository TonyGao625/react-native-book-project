using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.Business.ConvertModel;
using Book.DataAccess;
using Book.EntityModel;

namespace Book.Business
{
    public class BookBusiness
    {
        private readonly BookAgent _bookAgent;
        private readonly BookBorrowAgent _bookBorrowAgent;

        public BookBusiness()
        {
            _bookAgent = new BookAgent();
            _bookBorrowAgent=new BookBorrowAgent();
        }

        public async Task<MuliResult<BookInfoModel>> GetBookList()
        {
            var result = new MuliResult<BookInfoModel>();
            try
            {
                var dataList = await _bookAgent.GetBookList();
                result.Datas = dataList.Select(x => new BookInfoModel()
                {
                    Id = x.Id,
                    BookName = x.BookName,
                    Author = x.Author,
                    PublicDate = x.PublicDate,
                    PublicAddress = x.PublicAddress,
                    CategoryId = x.CategoryId,
                    Remark = x.Remark,
                    CreateDate = x.CreateDate,
                    CreateBy = x.CreateBy
                }).ToList();
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }

        public async Task<Operate> AddOrUpdate(BookInfoModel bookInfoModel)
        {
            var result=new Operate();
            try
            {
                var bookInfo = bookInfoModel.ToBookInfo();
                await _bookAgent.AddOrUpdate(bookInfo);
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }

        public async Task<Operate> BorrowBook(BookBorrowModel bookBorrowModel)
        {
            var result=new Operate();
            try
            {
                var borrow = bookBorrowModel.ToBookBorrow();

                var hasBorrow = await _bookBorrowAgent.GetBorrowBook(borrow.BookId);
                if (hasBorrow != null)
                {
                    result.Status = -2;
                    result.Message = "此书已被借阅";
                    return result;
                }

                await _bookBorrowAgent.AddOrUpdate(borrow);
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
