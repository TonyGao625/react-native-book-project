USE [BookProject]
GO
/****** Object:  Table [dbo].[BookBorrow]    Script Date: 7/8/2017 6:05:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookBorrow](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[BookId] [bigint] NOT NULL,
	[UserId] [int] NOT NULL,
	[BorrowDate] [datetime] NULL,
	[IsReturn] [bit] NOT NULL,
	[ReturnDate] [datetime] NULL,
 CONSTRAINT [PK_BookBorrow] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BookCategory]    Script Date: 7/8/2017 6:05:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookCategory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
 CONSTRAINT [PK_BookCategory] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BookCollection]    Script Date: 7/8/2017 6:05:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookCollection](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[BookId] [bigint] NOT NULL,
	[UserId] [int] NOT NULL,
	[CollectionDate] [datetime] NULL,
 CONSTRAINT [PK_BookCollection] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BookInfo]    Script Date: 7/8/2017 6:05:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookInfo](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[BookName] [nvarchar](200) NULL,
	[Author] [nvarchar](50) NULL,
	[PublicDate] [datetime] NULL,
	[PublicAddress] [nvarchar](200) NULL,
	[CategoryId] [int] NULL,
	[Remark] [nvarchar](max) NULL,
	[CreateDate] [datetime] NULL,
	[CreateBy] [nvarchar](50) NULL,
 CONSTRAINT [PK_Book] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 7/8/2017 6:05:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[RealName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  View [dbo].[V_BookBorrow]    Script Date: 7/8/2017 6:05:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_BookBorrow]
AS
SELECT        dbo.BookBorrow.Id, dbo.BookBorrow.BookId, dbo.BookBorrow.UserId, dbo.BookBorrow.BorrowDate, dbo.BookBorrow.IsReturn, dbo.BookBorrow.ReturnDate, dbo.Users.UserName, dbo.BookInfo.BookName, dbo.BookInfo.Author, 
                         dbo.BookInfo.PublicDate, dbo.BookInfo.PublicAddress, dbo.BookInfo.CategoryId, dbo.BookInfo.Remark, dbo.BookInfo.CreateDate, dbo.BookInfo.CreateBy
FROM            dbo.BookInfo INNER JOIN
                         dbo.BookBorrow ON dbo.BookInfo.Id = dbo.BookBorrow.BookId INNER JOIN
                         dbo.Users ON dbo.BookBorrow.UserId = dbo.Users.Id

GO
SET IDENTITY_INSERT [dbo].[BookBorrow] ON 

GO
INSERT [dbo].[BookBorrow] ([Id], [BookId], [UserId], [BorrowDate], [IsReturn], [ReturnDate]) VALUES (1, 1, 2, CAST(N'2017-07-07 20:30:27.040' AS DateTime), 0, NULL)
GO
INSERT [dbo].[BookBorrow] ([Id], [BookId], [UserId], [BorrowDate], [IsReturn], [ReturnDate]) VALUES (4, 3, 2, CAST(N'2017-07-07 20:38:10.917' AS DateTime), 0, NULL)
GO
INSERT [dbo].[BookBorrow] ([Id], [BookId], [UserId], [BorrowDate], [IsReturn], [ReturnDate]) VALUES (5, 2, 1, CAST(N'2017-07-07 23:22:18.483' AS DateTime), 0, NULL)
GO
SET IDENTITY_INSERT [dbo].[BookBorrow] OFF
GO
SET IDENTITY_INSERT [dbo].[BookCategory] ON 

GO
INSERT [dbo].[BookCategory] ([Id], [Name]) VALUES (1, N'企业/项目/时间管理类')
GO
INSERT [dbo].[BookCategory] ([Id], [Name]) VALUES (2, N'计算机 网络/软件工程开发类')
GO
INSERT [dbo].[BookCategory] ([Id], [Name]) VALUES (3, N'系统实践 /设计类')
GO
INSERT [dbo].[BookCategory] ([Id], [Name]) VALUES (4, N'生活 类')
GO
SET IDENTITY_INSERT [dbo].[BookCategory] OFF
GO
SET IDENTITY_INSERT [dbo].[BookCollection] ON 

GO
INSERT [dbo].[BookCollection] ([Id], [BookId], [UserId], [CollectionDate]) VALUES (1, 3, 2, CAST(N'2017-07-07 21:14:00.737' AS DateTime))
GO
INSERT [dbo].[BookCollection] ([Id], [BookId], [UserId], [CollectionDate]) VALUES (2, 3, 1, CAST(N'2017-07-07 06:34:30.527' AS DateTime))
GO
INSERT [dbo].[BookCollection] ([Id], [BookId], [UserId], [CollectionDate]) VALUES (3, 2, 1, CAST(N'2017-07-07 06:34:35.747' AS DateTime))
GO
INSERT [dbo].[BookCollection] ([Id], [BookId], [UserId], [CollectionDate]) VALUES (4, 1, 1, CAST(N'2017-07-07 06:34:38.360' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[BookCollection] OFF
GO
SET IDENTITY_INSERT [dbo].[BookInfo] ON 

GO
INSERT [dbo].[BookInfo] ([Id], [BookName], [Author], [PublicDate], [PublicAddress], [CategoryId], [Remark], [CreateDate], [CreateBy]) VALUES (1, N'阿米巴经营', N'稻盛合夫', CAST(N'2011-01-01 00:00:00.000' AS DateTime), N'中国大百科全书出版社', 1, N'稻盛和夫，被称为日本的“经营之圣、人生之师”，作为日本的企业家兼哲学家第一人，在企业经营和人生理念方面均有独到而务实的见解。他用40年时间创建了两家世界500强企业，是目前唯一在世的日本四大“经营之圣”(另三位分别是松下公司的创始人松下幸之助、索尼公司的创始人盛田昭夫、本田公司的创始人本田宗一郎)之一。他是4000多名经营者追随的企业导师，曾出版过10多本介绍企业经营理念和人生哲学的图书。 稻盛和夫的“阿米巴经营”理念及管理方式，被誉为“京瓷经营成功的两大支柱之一”。 “阿米巴经营”基于牢固的经营哲学和精细的部门独立核算管理，将企业划分为“小集体”，像自由自在的重复进行细胞分裂的“阿米巴”——以各个“阿米巴”为核心，自行制订计划，独立核算，持续自主成长，让每一位员工成为主角，“全员参与经营”，打造激情四射的集体，依靠全体智慧和努力完成企业经营目标，实现企业的飞速发展。 日本已有超过300家的企业在京瓷关联公司的指导下引进了阿米巴经营模式，业绩得以大幅提升。', CAST(N'2017-06-28 00:00:00.000' AS DateTime), N'Admin')
GO
INSERT [dbo].[BookInfo] ([Id], [BookName], [Author], [PublicDate], [PublicAddress], [CategoryId], [Remark], [CreateDate], [CreateBy]) VALUES (2, N'SCRUM敏捷项目管理', N'[美] 史威伯', NULL, N'世界图书出版公司', 1, N'The rules and practices for Scrum--a simple process for managing complex projects--are few, straightforward,and easy to learn. But Scrum''s simplicity itself--its lack of prescription--can be disarming, and new practitioners often find themselves reverting to old project management habits and tools and yielding lesser results. In this illuminating series of case studies, Scrum co-creator and evangelist Ken Schwaber identifies the real-world lessons--the successes and failures--culled from his years of experience coaching companies in agile project management. Through them, you''ll understand how to use Scrum to solve complex problems and drive results--delivering more valuable software faster.', CAST(N'2017-07-01 00:00:00.000' AS DateTime), N'Admin')
GO
INSERT [dbo].[BookInfo] ([Id], [BookName], [Author], [PublicDate], [PublicAddress], [CategoryId], [Remark], [CreateDate], [CreateBy]) VALUES (3, N'代码整洁之道', N'Robert C.Martin', NULL, N'人民邮电出版社', 2, N'软件质量，不但依赖于架构及项目管理，而且与代码质量紧密相关。这一点，无论是敏捷开发流派还是传统开发流派，都不得不承认。
本书提出一种观念：代码质量与其整洁度成正比。干净的代码，既在质量上较为可靠，也为后期维护、升级奠定了良好基础。作为编程领域的佼佼者，本书作者给出了一系列行之有效的整洁代码操作实践。这些实践在本书中体现为一条条规则（或称“启示”），并辅以来自现实项目的正、反两面的范例。只要遵循这些规则，就能编写出干净的代码，从而有效提升代码质量。
本书阅读对象为一切有志于改善代码质量的程序员及技术经理。书中介绍的规则均来自作者多年的实践经验，涵盖从命名到重构的多个编程方面，虽为一“家”之言，然诚有可资借鉴的价值。', CAST(N'2017-07-01 00:00:00.000' AS DateTime), N'Admin')
GO
SET IDENTITY_INSERT [dbo].[BookInfo] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

GO
INSERT [dbo].[Users] ([Id], [UserName], [RealName], [Password], [Email], [Phone], [RoleId]) VALUES (1, N'Admin@qq.com', N'管理员', N'123456', N'1625759939@qq.com', N'13072758875', 1)
GO
INSERT [dbo].[Users] ([Id], [UserName], [RealName], [Password], [Email], [Phone], [RoleId]) VALUES (2, N'hzx', N'黄紫霞', N'123456', N'1625759939@', N'13087869986', 2)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[BookBorrow]  WITH CHECK ADD  CONSTRAINT [FK_BookBorrow_Book] FOREIGN KEY([BookId])
REFERENCES [dbo].[BookInfo] ([Id])
GO
ALTER TABLE [dbo].[BookBorrow] CHECK CONSTRAINT [FK_BookBorrow_Book]
GO
ALTER TABLE [dbo].[BookBorrow]  WITH CHECK ADD  CONSTRAINT [FK_BookBorrow_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[BookBorrow] CHECK CONSTRAINT [FK_BookBorrow_Users]
GO
ALTER TABLE [dbo].[BookCollection]  WITH CHECK ADD  CONSTRAINT [FK_BookCollection_BookInfo] FOREIGN KEY([BookId])
REFERENCES [dbo].[BookInfo] ([Id])
GO
ALTER TABLE [dbo].[BookCollection] CHECK CONSTRAINT [FK_BookCollection_BookInfo]
GO
ALTER TABLE [dbo].[BookCollection]  WITH CHECK ADD  CONSTRAINT [FK_BookCollection_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[BookCollection] CHECK CONSTRAINT [FK_BookCollection_Users]
GO
ALTER TABLE [dbo].[BookInfo]  WITH CHECK ADD  CONSTRAINT [FK_Book_BookCategory] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[BookCategory] ([Id])
GO
ALTER TABLE [dbo].[BookInfo] CHECK CONSTRAINT [FK_Book_BookCategory]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[54] 4[15] 2[12] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "BookInfo"
            Begin Extent = 
               Top = 130
               Left = 774
               Bottom = 260
               Right = 944
            End
            DisplayFlags = 280
            TopColumn = 5
         End
         Begin Table = "BookBorrow"
            Begin Extent = 
               Top = 111
               Left = 189
               Bottom = 241
               Right = 359
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "Users"
            Begin Extent = 
               Top = 245
               Left = 386
               Bottom = 375
               Right = 556
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 4695
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_BookBorrow'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'V_BookBorrow'
GO
