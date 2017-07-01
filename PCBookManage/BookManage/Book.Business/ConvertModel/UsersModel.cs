using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.DataModel;
using Book.EntityModel;

namespace Book.Business.ConvertModel
{
    public static partial class ConvertModel
    {
        public static UsersModel ToUsersModel(this User user)
        {
            return new UsersModel()
            {
                Id = user.Id,
                UserName = user.UserName,
                RealName = user.RealName,
                Password = user.Password,
                Email=user.Email,
                Phone=user.Phone,
                RoleId=user.RoleId
            };
        }

        public static User ToUser(this UsersModel model)
        {
            return new User()
            {
                Id = model.Id,
                UserName = model.UserName,
                RealName = model.RealName,
                Password = model.Password,
                Email = model.Email,
                Phone = model.Phone,
                RoleId = model.RoleId
            };
        }
    }
}
