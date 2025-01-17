USE [QUIZ]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 17/12/2024 20:10:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Questions]    Script Date: 17/12/2024 20:10:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Questions](
	[QuestionId] [int] IDENTITY(1,1) NOT NULL,
	[QuestionNo] [int] NOT NULL,
	[QuestionText] [nvarchar](max) NOT NULL,
	[Type] [nvarchar](max) NOT NULL,
	[Options] [nvarchar](max) NOT NULL,
	[CorrectAnswer] [nvarchar](max) NOT NULL,
	[ReasonCorrectAnswer] [nvarchar](max) NOT NULL,
	[Time] [int] NOT NULL,
	[QuizId] [int] NOT NULL,
 CONSTRAINT [PK_Questions] PRIMARY KEY CLUSTERED 
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quizzes]    Script Date: 17/12/2024 20:10:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Quizzes](
	[QuizId] [int] IDENTITY(1,1) NOT NULL,
	[IsTheWholeTime] [bit] NOT NULL,
	[Time] [int] NOT NULL,
 CONSTRAINT [PK_Quizzes] PRIMARY KEY CLUSTERED 
(
	[QuizId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20241217090726_InitialCreate', N'9.0.0')
GO
SET IDENTITY_INSERT [dbo].[Questions] ON 

INSERT [dbo].[Questions] ([QuestionId], [QuestionNo], [QuestionText], [Type], [Options], [CorrectAnswer], [ReasonCorrectAnswer], [Time], [QuizId]) VALUES (1, 1, N'Soal 1', N'multiple_choice', N'["Berlin", "Madrid", "Paris", "Rome"]', N'Paris', N'Paris is the capital and largest city of France, known for its cultural and historical significance.', 0, 1)
INSERT [dbo].[Questions] ([QuestionId], [QuestionNo], [QuestionText], [Type], [Options], [CorrectAnswer], [ReasonCorrectAnswer], [Time], [QuizId]) VALUES (2, 2, N'Soal 2', N'multiple_choice', N'["jawaban 1", "jawaban 2", "jawaban 3", "jawaban 4"]', N'1', N'Paris is the capital and largest city of France, known for its cultural and historical significance.', 0, 1)
SET IDENTITY_INSERT [dbo].[Questions] OFF
GO
SET IDENTITY_INSERT [dbo].[Quizzes] ON 

INSERT [dbo].[Quizzes] ([QuizId], [IsTheWholeTime], [Time]) VALUES (1, 1, 300)
SET IDENTITY_INSERT [dbo].[Quizzes] OFF
GO
ALTER TABLE [dbo].[Questions]  WITH CHECK ADD  CONSTRAINT [FK_Questions_Quizzes_QuizId] FOREIGN KEY([QuizId])
REFERENCES [dbo].[Quizzes] ([QuizId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Questions] CHECK CONSTRAINT [FK_Questions_Quizzes_QuizId]
GO
