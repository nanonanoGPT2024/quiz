

using QUIZ.Models;

namespace QUIZ.Services
{
    public interface IQuizService
    {
        IEnumerable<QuizModel> GetAllQuizzes();
        QuizModel GetQuizById(int id);
        void CreateQuiz(QuizModel quiz);
        void UpdateQuiz(QuizModel quiz);
        void DeleteQuiz(int id);

    }
}