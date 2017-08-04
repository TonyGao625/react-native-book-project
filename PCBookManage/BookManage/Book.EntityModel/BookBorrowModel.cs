using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.EntityModel
{
    public partial class BookBorrowModel
    {
        public long Id { get; set; }
        public long BookId { get; set; }
        public string UserName { get; set; }
        public DateTime? BorrowDate { get; set; }
        public bool IsReturn { get; set; }
        public DateTime? ReturnDate { get; set; }
        public DateTime? NeedReturnDate { get; set; }
        public int IsOverTime { get; set; }
    }

    public partial class BookBorrowModel
    {
        public string BookName { get; set; }
        public string Author { get; set; }
        public DateTime? PublicDate { get; set; }
        public string PublicAddress { get; set; }
        public int? CategoryId { get; set; }
        public string Remark { get; set; }
        public DateTime? CreateDate { get; set; }
        public string CreateBy { get; set; }
        public string ImagePath { get; set; }
    }
}
