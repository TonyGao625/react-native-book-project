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
    
    public partial class V_BookAll
    {
        public long Id { get; set; }
        public string BookName { get; set; }
        public string Author { get; set; }
        public Nullable<System.DateTime> PublicDate { get; set; }
        public string PublicAddress { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public string Remark { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<System.DateTime> BorrowDate { get; set; }
        public Nullable<bool> IsReturn { get; set; }
        public Nullable<System.DateTime> ReturnDate { get; set; }
        public string UserName { get; set; }
        public string CreateBy { get; set; }
        public bool CanOrder { get; set; }
    }
}
