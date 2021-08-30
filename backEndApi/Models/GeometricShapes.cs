using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace backEndAPi.Models
{
    public class GeometricShapes
    {

        [Key]
        public String idFormasGeometricas { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
        public string nome { get; set; }

        public string id_diretorio { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        public string tipo { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        public string cor { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        public int tamPixels { get; set; }
    }
}