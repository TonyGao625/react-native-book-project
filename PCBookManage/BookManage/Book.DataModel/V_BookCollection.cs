//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Book.DataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class V_BookCollection
    {
        public string BookName { get; set; }
        public string Author { get; set; }
        public Nullable<System.DateTime> PublicDate { get; set; }
        public string PublicAddress { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public string Remark { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public string CreateBy { get; set; }
        public long Id { get; set; }
        public long BookId { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public Nullable<System.DateTime> CollectionDate { get; set; }
        public string ImagePath { get; set; }
    }
}
