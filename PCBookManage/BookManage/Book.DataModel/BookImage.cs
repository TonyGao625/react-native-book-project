//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Book.DataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class BookImage
    {
        public long Id { get; set; }
        public long BookId { get; set; }
        public bool IsCover { get; set; }
        public Nullable<int> SortOrder { get; set; }
        public string ImagePath { get; set; }
    
        public virtual BookInfo BookInfo { get; set; }
    }
}
