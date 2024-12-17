using QUIZ.Models;
using QUIZ.Repositories;

namespace QUIZ.Services
{
    public class QuizService : IQuizService
    {
        private readonly IQuizRepository _repository;


        public QuizService(IQuizRepository repository)
        {
            _repository = repository;
        }


        public IEnumerable<QuizModel> GetAllQuizzes()
        {
            return _repository.GetAll();
        }

        public QuizModel GetQuizById(int id)
        {
            return _repository.GetById(id);
        }

        public void CreateQuiz(QuizModel quiz)
        {
            _repository.Add(quiz);
            _repository.Save();
        }

        public void UpdateQuiz(QuizModel quiz)
        {
            _repository.Update(quiz);
            _repository.Save();
        }

        public void DeleteQuiz(int id)
        {
            _repository.Delete(id);
            _repository.Save();
        }
    }
}