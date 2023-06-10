USE [ProyectoFinal2]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 19/5/2023 16:06:47 ******/
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
	[ImagenEvento] [varchar](max) NULL
	CONSTRAINT [PK_Evento] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 
GO
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
	[Genero] [varchar](50) NULL,
	[FechaCreacion] [datetime] NULL,
	[Descripcion] [varchar](max) NULL,
	[Direccion] [varchar](50) NOT NULL,
	[FotoPerfil] [varchar](max) NULL
	CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 
GO
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (1, N'DominikPoleto',N'1', N'Domingo', N'Sarmiento', CAST(N'2005-12-04T00:00:00.000' AS DateTime), 1, CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Un hombre con gustos refinados',N'Buenos Aires' ,N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
GO
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (2, N'SebasPolo',N'2', N'Sebastian',  N'Polonsky', CAST(N'1965-11-14T00:00:00.000' AS DateTime), 1, CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Me gusta el tennis y el cricket',N'Buenos Aires' ,N'/img/fotto')
GO
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO

SET IDENTITY_INSERT [dbo].[Evento] ON
GO
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento] ) VALUES (1, N'Fiesta Milagrosa', CAST(N'2023-06-24T00:00:00.000' AS DateTime), 800, 200, N'La mejor joda estilo proyecto X.', N'guardia vieja 4000', 1, NULL, NULL, 16, 30, N'https://cpad.ask.fm/379/040/503/-389996995-1ss3e9t-jmbfo9dgb80758a/original/noche.jpg')
GO
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento] ) VALUES (2, N'Torneo Truco', CAST(N'2023-02-22T00:00:00.000' AS DateTime), 500, 8, N'Torneo de Truco los viernes. El torneo consta de 4 equipos con dos integrantes cada uno, el equipo ganador se llevara el increible premio de 4000 mil pesos', N'Malabia y Paraguay', 0, NULL, NULL, 14, 99, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jqeGOaK32uBiLQndOYQybwwjHjuZ0tl79EvNTRUN4e6EYaSTSTaXguDJeKfOX9GCC9I&usqp=CAU')
GO
SET IDENTITY_INSERT [dbo].[Evento] OFF
GO

/****** Object:  Table [dbo].[Evento]    Script Date: 19/5/2023 16:06:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
