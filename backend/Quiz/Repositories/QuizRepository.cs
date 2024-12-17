using Microsoft.EntityFrameworkCore;
using QUIZ.Data;
using QUIZ.Models;

namespace QUIZ.Repositories
{
    public class QuizRepository :IQuizRepository
    {
        private readonly ApplicationContext _context;


        public QuizRepository(ApplicationContext context)
        {
            _context = context;
        }

        public IEnumerable<QuizModel> GetAll()
        {
            return _context.Quizzes.Include(q => q.Questions).ToList();
        }

        public QuizModel GetById(int id)
        {
            return _context.Quizzes.Include(q => q.Questions).FirstOrDefault(q => q.QuizId == id);
        }

        public void Add(QuizModel quiz)
        {
            _context.Quizzes.Add(quiz);
        }

        public void Update(QuizModel quiz)
        {
            _context.Entry(quiz).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            var quiz = _context.Quizzes.Find(id);
            if(quiz != null)
            {
                _context.Quizzes.Remove(quiz);
            }
        }


        public void Save()
        {
            _context.SaveChanges();
        }

    }
}