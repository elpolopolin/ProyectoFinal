USE [ProyectoFinal2]
GO

/****** Object:  User [Eventop]    Script Date: 2/6/2023 09:48:38 ******/
CREATE USER [Eventop] FOR LOGIN [Eventop] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Eventop]
GO
/****** Object:  Table [dbo].[Amistades]    Script Date: 2/6/2023 09:48:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Amistades](
	IdUsuario INTEGER,             
	IdUsuario_FK INTEGER         
) ON [PRIMARY]
GO
ALTER TABLE Amistades ADD CONSTRAINT FK_User_Friends FOREIGN KEY (IdUsuario) REFERENCES Usuario(Id);              
ALTER TABLE Amistades ADD CONSTRAINT FK_User_FK_Friends FOREIGN KEY (idUser_FK) REFERENCES Usuario(Id);                
GO
INSERT INTO Amistades VALUES(1,2); 
INSERT INTO Amistades VALUES(1,3); 
GO
/****** Object:  Table [dbo].[Colaborador_x_Evento]    Script Date: 2/6/2023 09:48:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Colaborador_x_Evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 2/6/2023 09:48:38 ******/
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
 CONSTRAINT [PK_Evento] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invitado_x_evento]    Script Date: 2/6/2023 09:48:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invitado_x_evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Participante_x_Evento]    Script Date: 2/6/2023 09:48:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participante_x_Evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 2/6/2023 09:48:38 ******/
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
	[Genero] [bit] NULL,
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
INSERT [dbo].[Amistades] ([IdUsuario1], [IdUsuario2], [FechaAmistad]) VALUES (1, 2, CAST(N'2023-02-22' AS Date))
GO
SET IDENTITY_INSERT [dbo].[Evento] ON 

INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (1, N'Fiesta Milagrosa', CAST(N'2023-06-24T00:00:00.000' AS DateTime), 800, 200, N'La mejor joda estilo proyecto X.', N'Guardia Vieja 4000', 1, NULL, NULL, 16, 30, N'https://cpad.ask.fm/379/040/503/-389996995-1ss3e9t-jmbfo9dgb80758a/original/noche.jpg')
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (2, N'Torneo Truco', CAST(N'2023-02-22T00:00:00.000' AS DateTime), 500, 8, N'Torneo de Truco los viernes. El torneo consta de 4 equipos con dos integrantes cada uno, el equipo ganador se llevara el increible premio de 4000 mil pesos', N'Malabia y Paraguay', 0, NULL, NULL, 14, 99, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jqeGOaK32uBiLQndOYQybwwjHjuZ0tl79EvNTRUN4e6EYaSTSTaXguDJeKfOX9GCC9I&usqp=CAU')
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento]) VALUES (10, N'Partido F11', CAST(N'2023-06-24T00:00:00.000' AS DateTime), 730, 22, N'Partido de futbol 11 vs 11', N'Kdt Salguero', 1, NULL, NULL, 17, 27, N'')
SET IDENTITY_INSERT [dbo].[Evento] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (1, N'DominikPoleto', N'1', N'Domingo', N'Sarmiento', CAST(N'2005-12-04T00:00:00.000' AS DateTime), 1, CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Un hombre con gustos refinados', N'Buenos Aires', N'https://lh3.googleusercontent.com/P8jSjd8WGq2g6wNrhN7y9a6u0iJa0D1oH6M4K9_shMih8R2fLqfuQwRIvpYqu5bjzGYscv_N9wg_TtxFxI1jxBLeiEk8q7oodkiY-LOfLJG6N0UOmJTXT1HxNhDAelESLK9io9exE0r6IMIEbKn4-hnZWaKffh604oHD5aG5D_qZwLIY7K5nKj-AuS0IGRlMy1onzHVHZhv-l4xid71w3Jpw-bFyYqK3pcf3deCL2CXHqhZmlgmz4LKuqU-eEBu69n4IJok2M54Tgejef-gVm8uEbXf07AdKJU5l6LxSKlIlA790W4b63VJZ9Z6DV8rvXWKhQV-6ty1PzR__RPlwM54TRnFWyQbXcaQbqVzmXPkvdZLOQwP_QXjRwcil17vzlKSlOqIAPYMT1N5G7Z_zV9SZDbczxtpweKOUceub-7F10V-UUxQ9Sy4ynZ3vFYrPgoN8IOYgXzzMTFq2f6zsq4qpcB4HImKTBSY2yECJSMtHnocVFONwihMFUrI0TkzYgsR3wzEpVMIh57tqGPcmDZltwv1qUP-CSlcD1N4mljeKkLIZe0ySfjshgOJh7SlqxHDJc0S10R1kwluS7oCulZnwAz2OoVhiO5chyNyX5nN5FZBCLHyrw87cYvkAYutru6qh3USMnHsfWb0JB_8BubFJD6AqpT-A7zpr4hj6-De_LocXZpEwa_DuV739Rs3LArsON88kpIEThk2JoAjjrTooCGXHT6VJgrPfHogV7IZ-uJfJEdOHy8lud1VePM7f4ygGMkhw6LuJR8n-fbb0PJTVXVsWwhHe9CpV8xNIdoV32DBiPS2o6os107tNikQL6qe7PxBHEiYuGFa4TkRR1rGjfgLkojQNR0W6BnXksJpBfTvBKnaC96CuZC_qwmSC5Y6uJdW3RyZbCXf6v14T6xUC7s0cKz7cALN3ykWUwkOKrdT35Sm7bMXs7KxFQ5MSYttu6zIVpsIiSOcPqA=w545-h969-s-no?authuser=0')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (2, N'SebasPolo', N'2', N'Sebastian', N'Polonsky', CAST(N'1965-11-14T00:00:00.000' AS DateTime), 1, CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Me gusta el tennis y el cricket', N'Buenos Aires', N'/img/fotto')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contraseña], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (3, N'has ', N'123', N'sta', N'asf', NULL, NULL, CAST(N'2023-06-02T11:41:55.707' AS DateTime), NULL, N'asfdan 123', NULL)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
ALTER TABLE [dbo].[Amistades]  WITH CHECK ADD  CONSTRAINT [FK_Amistades_Usuario] FOREIGN KEY([IdUsuario1])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Amistades] CHECK CONSTRAINT [FK_Amistades_Usuario]
GO
ALTER TABLE [dbo].[Amistades]  WITH CHECK ADD  CONSTRAINT [FK_Amistades_Usuario1] FOREIGN KEY([IdUsuario2])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Amistades] CHECK CONSTRAINT [FK_Amistades_Usuario1]
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
