using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.Business.ConvertModel
{
    public partial class ConvertModel
    {
        public static bool IsLoaded<TEntity>(TEntity entity, Func<TEntity, object> action)
        {
            try
            {
                action(entity);
                return true;
            }
            catch (ObjectDisposedException)
            {
                return false;
            }
            catch (StackOverflowException)
            {
                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
