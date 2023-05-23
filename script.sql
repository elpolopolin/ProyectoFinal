USE [ProyectoFinal]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 19/5/2023 16:06:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evento](
	[Id] [int] NOT NULL,
	[Nombre] [varchar](150) NULL,
	[Fecha] [datetime] NULL,
	[Precio] [float] NULL,
	[Participantes] [float] NULL,
	[Descripcion] [varchar](max) NULL,
	[Direccion] [varchar](50) NOT NULL,
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
SET IDENTITY_INSERT [dbo].[Evento] ON 
GO
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento] ) VALUES (1, N'Fiesta Milagrosa', CAST(N'2023-06-24T00:00:00.000' AS DateTime), 800, 200, N'La mejor joda estilo proyecto X.', N'guardia vieja 4000', NULL, NULL, 16, 30, N'https://cpad.ask.fm/379/040/503/-389996995-1ss3e9t-jmbfo9dgb80758a/original/noche.jpg')
GO
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima], [ImagenEvento] ) VALUES (2, N'Torneo Truco', CAST(N'2023-02-22T00:00:00.000' AS DateTime), 500, 8, N'Torneo de Truco los viernes. El torneo consta de 4 equipos con dos integrantes cada uno, el equipo ganador se llevara el increible premio de 4000 mil pesos', N'Malabia y Paraguay', NULL, NULL, 14, 99, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jqeGOaK32uBiLQndOYQybwwjHjuZ0tl79EvNTRUN4e6EYaSTSTaXguDJeKfOX9GCC9I&usqp=CAU')
GO
SET IDENTITY_INSERT [dbo].[Evento] OFF
GO
