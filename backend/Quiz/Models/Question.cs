using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QUIZ.Models
{
    public class Question
    {
        [Key]
        public int QuestionId { get; set; }
        public int QuestionNo { get; set; }
        public string QuestionText { get; set; }

        public string Type { get; set; }
        public string Options { get; set; }
        public string CorrectAnswer { get; set; }
        public string ReasonCorrectAnswer { get; set; }
        public int Time { get; set; }
        public int QuizId { get; set; }
        [ForeignKey("QuizId")]
        public QuizModel Quiz { get; set; }

        public DateTime created_date { get; set; }
        public DateTime updated_date { get; set; }
        public string created_by {get;set;}
        public string updated_by {get;set;}

    }
}