using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using QUIZ.Models;
using QUIZ.Services;

namespace QUIZ.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService _quizService;

        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

      [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var quizzes = _quizService.GetAllQuizzes();

            var response = quizzes.Select(quiz => new
            {
                isTheWholeTime = quiz.IsTheWholeTime,
                time = quiz.Time,
                questions = quiz.Questions.Select(q => new
                {
                    q.QuestionNo,
                    q.QuestionText,
                    q.Type,
                    Options = JsonSerializer.Deserialize<List<string>>(q.Options),
                    q.CorrectAnswer,
                    q.ReasonCorrectAnswer,
                    q.Time
                })
            });

            return Ok(response);
        }


        // [HttpPost("add")]
        // public IActionResult AddQuiz([FromBody] QuizModel quiz)
        // {
        //     if(quiz == null) return BadRequest("Invalid Data");

        //     foreach (var question in quiz.Questions)
        //     {
        //         question.Options = JsonSerializer.Serialize(JsonSerializer.Deserialize<List<string>>(question.Options));
        //     }

        //     _quizService.CreateQuiz(quiz);
        //     return Ok("Quiz Successfully");
        // }
    }
}