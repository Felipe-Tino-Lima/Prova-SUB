using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;
public class Imc
{
  public Imc()
      {
        CriadoEm = DateTime.Now;
      }
  [Key]
  public int ImcId { get; set; }    
  public DateTime CriadoEm { get; set; }
  public float Altura { get; set; }
  public float Peso { get; set; }
  public int UsuarioId { get; set; } 
  [ForeignKey("UsuarioId")]
  public Usuario? Usuario { get; set; }


  


  public void VerificarClassificacao()
    {

    }   

}