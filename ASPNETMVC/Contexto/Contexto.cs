using ASPNETMVC.Controllers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETMVC.Contexto
{
    public class Contexto
    {
        public sistema_prdContext database { get; set; }

        public Contexto()
        {
            var configuracao = new DbContextOptionsBuilder<sistema_prdContext>();
            configuracao.UseSqlServer(UtilController.GetDatabase());

            this.database = new sistema_prdContext(configuracao.Options);
        }
    }
}
