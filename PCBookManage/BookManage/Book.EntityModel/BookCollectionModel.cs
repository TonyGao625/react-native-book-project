using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.EntityModel
{
    public class BookCollectionModel
    {
        public long Id { get; set; }
        public long BookId { get; set; }
        public int UserId { get; set; }
        public DateTime? CollectionDate { get; set; }
    }
}
