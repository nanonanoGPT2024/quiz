using System.ComponentModel.DataAnnotations;

namespace QUIZ.Models
{
    public class QuizModel
    {
        [Key]
        public int QuizId { get; set; }
        public bool IsTheWholeTime { get; set; }
        public int Time { get; set; }
        public ICollection<Question> Questions { get; set; }
        public DateTime created_date { get; set; }
        public DateTime updated_date { get; set; }
        public string created_by { get; set; }
        public string updated_by { get; set; }
    }
}
