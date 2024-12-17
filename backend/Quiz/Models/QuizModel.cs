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
    }
}
