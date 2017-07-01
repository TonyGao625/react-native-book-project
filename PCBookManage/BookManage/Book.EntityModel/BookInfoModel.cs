using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.EntityModel
{
    public class BookInfoModel
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
}
