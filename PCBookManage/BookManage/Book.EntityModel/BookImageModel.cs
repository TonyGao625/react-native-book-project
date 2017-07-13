using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.EntityModel
{
    public class BookImageModel
    {
        public long Id { get; set; }
        public long BookId { get; set; }
        public bool IsCover { get; set; }
        public int SortOrder { get; set; }
        public string ImagePath { get; set; }
    }
}
