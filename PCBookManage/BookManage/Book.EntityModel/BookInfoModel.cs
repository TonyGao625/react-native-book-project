using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.EntityModel
{
    /// <summary>
    /// for table
    /// </summary>
    public partial class BookInfoModel
    {
        public long Id { get; set; }
        public string BookName { get; set; }
        public string Author { get; set; }
        public DateTime? PublicDate { get; set; }
        public string PublicAddress { get; set; }
        public int? CategoryId { get; set; }
        public string Remark { get; set; }
        public DateTime? CreateDate { get; set; }
        public string CreateBy { get; set; }
    }

    /// <summary>
    /// for include list
    /// </summary>
    public partial class BookInfoModel
    {
        public List<BookBorrowModel> BookBorrowList { get; set; }
        public List<BookImageModel> BookImageList { get; set; }
    }

    /// <summary>
    /// for book view
    /// </summary>
    public partial class BookInfoModel
    {
        public int? UserId { get; set; }
        public string UserName { get; set; }
        public DateTime? BorrowDate { get; set; }
        public bool? IsReturn { get; set; }
        public DateTime? ReturnDate { get; set; }
        public bool CanOrder { get; set; }
        public string CategoryName { get; set; }
    }
}
