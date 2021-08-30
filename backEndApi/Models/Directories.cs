using System;
using System.ComponentModel.DataAnnotations;

namespace backEndAPi.Models
{
    public class Directories
    {
        [Key]
        public string idDiretorio { get; set; } 

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
        public string nome { get; set; }
    }
}