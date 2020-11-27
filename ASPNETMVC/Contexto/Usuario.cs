using System;
using System.Collections.Generic;

#nullable disable

namespace ASPNETMVC.Contexto
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string HashId { get; set; }
        public DateTime? UltimoLogin { get; set; }
    }
}
