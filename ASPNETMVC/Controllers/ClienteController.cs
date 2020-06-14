using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ASPNETMVC.Controllers
{
    public class ClienteController : Controller
    {
        public IActionResult Listar()
        {
            return View();
        }

        public ActionResult Novo()
        {
            return View("Dados");
        }

        public Boolean SalvarCliente(ClienteModels model)
        {
            //realiza a persistencia
            return true;
        }
    }
}