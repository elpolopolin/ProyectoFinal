USE [ProyectoFinal2]
GO
/****** Object:  Table [dbo].[Amistades]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Amistades](
	[IdUsuario] [int] NULL,
	[IdUsuario_FK] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categoria](
	[idCategoria] [int] NOT NULL,
	[NombreCategoria] [varchar](50) NULL
 CONSTRAINT [PK_Categoria] PRIMARY KEY CLUSTERED 
(
	[idCategoria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 
GO
/****** Object:  Table [dbo].[Colaborador_x_Evento]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Colaborador_x_Evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evento](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NULL,
	[Fecha] [datetime] NULL,
	[Precio] [float] NULL,
	[Participantes] [float] NULL,
	[Descripcion] [varchar](max) NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Publico] [bit] NULL,
	[Colaboradores] [varchar](max) NULL,
	[Invitados] [varchar](max) NULL,
	[EdadMinima] [float] NULL,
	[EdadMaxima] [float] NULL,
	[ImagenEvento] [varchar](max) NULL,
	[idCategoria] [int] NULL,
 CONSTRAINT [PK_Evento] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invitado_x_evento]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invitado_x_evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Participante_x_Evento]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participante_x_Evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 2/6/2023 11:47:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsuario] [varchar](150) NULL,
	[Contraseña] [varchar](150) NULL,
	[Nombre] [varchar](150) NULL,
	[Apellido] [varchar](150) NULL,
	[FechaNacimiento] [datetime] NULL,
	[Genero] [varchar](150) NULL,
	[FechaCreacion] [datetime] NULL,
	[Descripcion] [varchar](max) NULL,
	[Direccion] [varchar](50) NOT NULL,
	[FotoPerfil] [varchar](max) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Amistades] ([IdUsuario], [IdUsuario_FK]) VALUES (1, 2)
INSERT [dbo].[Amistades] ([IdUsuario], [IdUsuario_FK]) VALUES (1, 3)
GO
INSERT [dbo].[Categoria] ([idCategoria], [NombreCategoria]) VALUES (1, N'Juegos de mesa')
GO
SET IDENTITY_INSERT [dbo].[Evento] ON 

INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (1, N'Fiesta Milagrosa', CAST(N'2023-06-24T00:00:00.000' AS DateTime), 800, 200, N'La mejor joda estilo proyecto X.', N'Guardia Vieja 4000', 1, NULL, N'True', 16, 30, N'https://cpad.ask.fm/379/040/503/-389996995-1ss3e9t-jmbfo9dgb80758a/original/noche.jpg')
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (2, N'Torneo Truco', CAST(N'2023-02-22T00:00:00.000' AS DateTime), 500, 8, N'Torneo de Truco los viernes. El torneo consta de 4 equipos con dos integrantes cada uno, el equipo ganador se llevara el increible premio de 4000 mil pesos', N'Malabia y Paraguay', 0, NULL, NULL, 14, 99, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jqeGOaK32uBiLQndOYQybwwjHjuZ0tl79EvNTRUN4e6EYaSTSTaXguDJeKfOX9GCC9I&usqp=CAU')
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (10, N'Partido F11', CAST(N'2023-06-25T11:00:00.000' AS DateTime), 730, 22, N'Partido de futbol 11 vs 11', N'Kdt Salguero', 1, NULL, NULL, 17, 27, N'')
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (11, N'Fiesta Mambo', CAST(N'2023-06-20T10:00:00.000' AS DateTime), 2000, 350, N'Fiesta de Halloween con invitados especiales', N'Cnel. Niceto Vega 5646', 0, N'True', N'True', 18, 30, NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (13, N'Joda Anat Indones', CAST(N'2023-06-20T00:00:00.000' AS DateTime), 1500, 60, N'Una fiesta distinta e inolvidable', N'Guardia Vieja 4083', 0, NULL, N'True', 16, 20, NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (15, N'Partida de ajedrez', CAST(N'2023-06-02T11:41:55.707' AS DateTime), NULL, 20, N'Partido de ajedrez', N'Jorge Luis Borges 1689', 1, NULL, NULL, 6, 80, NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (17, N'Partido de rugby', CAST(N'2023-06-02T11:41:55.707' AS DateTime), NULL, 30, N'Partido de rugby con los pibes mann', N'Av. Pres. Figueroa Alcorta 5575', 1, NULL, NULL, 14, 24, NULL)

SET IDENTITY_INSERT [dbo].[Evento] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (1, N'DominikPoleto', N'1', N'Domingo', N'Sarmiento', CAST(N'2005-12-04T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Un hombre con gustos refinados', N'Buenos Aires', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (2, N'SebasPolo', N'2', N'Sebastian', N'Polonsky', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Me gusta el tennis y el cricket', N'Buenos Aires', N'/img/fotto')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (3, N'has ', N'123', N'sta', N'asf', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'Prefiero no decirlo', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'si', N'asfdan 123', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (6, N'CaroFormi', N'alkanalino22', N'Carolina', N'Formi', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'F', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'me gusta cocinar', N'malabia 2215', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (7, N'triponski', N'autismo34', N'Tripi', N'Lonsky', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy autista y busco mas autistas', N'guardia bieja 4039', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (8, N'Dipri', N'enanos123', N'Dirpi', N'Assando', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'Soy enano.', N'laboka', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (9, N'albert', N'sinbol33', N'Alberto', N'Sinboll', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy el presidente de la argentina', N'olasabal 222', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (11, N'FACUNDITAWX', N'foxy777', N'Facunda', N'Liponetzka', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'No Binario', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy trans', N'muñecas 3109', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (12, N'estanislao2322', N'almasidneio222', N'Estanislao', N'Norbert', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy empresario', N'libertador 4201', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (11, N'Camila_Navarro', N'pololove', N'camila', N'navarro', NULL, NULL, CAST(N'2023-06-02T14:35:03.490' AS DateTime), NULL, N'malabia 287', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2h4-vffniu-BiaeF66Kh_gw9lZUFjYXx7BWZo6BEqEi6SuAxIWMS-fZGIChJ0A6bvbM&usqp=CAU')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
ALTER TABLE [dbo].[Colaborador_x_Evento]  WITH CHECK ADD  CONSTRAINT [FK_Colaborador_x_Evento_Evento] FOREIGN KEY([IdEvento])
REFERENCES [dbo].[Evento] ([Id])
GO
ALTER TABLE [dbo].[Colaborador_x_Evento] CHECK CONSTRAINT [FK_Colaborador_x_Evento_Evento]
GO
ALTER TABLE [dbo].[Colaborador_x_Evento]  WITH CHECK ADD  CONSTRAINT [FK_Colaborador_x_Evento_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Colaborador_x_Evento] CHECK CONSTRAINT [FK_Colaborador_x_Evento_Usuario]
GO
ALTER TABLE [dbo].[Invitado_x_evento]  WITH CHECK ADD  CONSTRAINT [FK_Invitado_x_evento_Evento] FOREIGN KEY([IdEvento])
REFERENCES [dbo].[Evento] ([Id])
GO
ALTER TABLE [dbo].[Invitado_x_evento] CHECK CONSTRAINT [FK_Invitado_x_evento_Evento]
GO
ALTER TABLE [dbo].[Invitado_x_evento]  WITH CHECK ADD  CONSTRAINT [FK_Invitado_x_evento_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Invitado_x_evento] CHECK CONSTRAINT [FK_Invitado_x_evento_Usuario]
GO
ALTER TABLE [dbo].[Participante_x_Evento]  WITH CHECK ADD  CONSTRAINT [FK_Participante_x_Evento_Evento] FOREIGN KEY([IdEvento])
REFERENCES [dbo].[Evento] ([Id])
GO
ALTER TABLE [dbo].[Participante_x_Evento] CHECK CONSTRAINT [FK_Participante_x_Evento_Evento]
GO
ALTER TABLE [dbo].[Participante_x_Evento]  WITH CHECK ADD  CONSTRAINT [FK_Participante_x_Evento_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Participante_x_Evento] CHECK CONSTRAINT [FK_Participante_x_Evento_Usuario]
GO
