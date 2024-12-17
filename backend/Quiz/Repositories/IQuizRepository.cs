using QUIZ.Models;

namespace QUIZ.Repositories
{
    public interface IQuizRepository
    {
        IEnumerable<QuizModel> GetAll();
        QuizModel GetById(int id);
        void Add(QuizModel quiz);
        void Update(QuizModel quiz);
        void Delete(int id);
        void Save();
    }
}