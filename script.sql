USE [Eventop]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 11/4/2023 09:04:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Eventos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NULL,
	[Fecha] [Date] NOT NULL,
	[Precio] [Float] NULL,
	[MaxInvitados] [Float] NOT NULL,
	[Descripcion] [varchar](max) NULL,
	[Direccion] [varchar](150) NOT NULL,
	[Colaboradores] [varchar](max) NULL, /****** corregir luego *****/
	[Invitados] [varchar](max) NULL, /****** corregir luego *****/
	[EdadMinima] [Float] NOT NULL,
	[EdadMaxima] [Float] NOT NULL,

 CONSTRAINT [PK_Pizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Eventos] ON 

INSERT [dbo].[Eventos] ([Id], [Nombre], [Fecha], [Precio], [MaxInvitados], [Descripcion], [Direccion], [Colaboradores], [Invitados], [EdadMinima], [EdadMaxima]) VALUES (1, N'Fiesta Milagrosa', '17-12-2033', 800, 100, N'La joda mas copada', N'Guardia vieja 4000', N'', N'', 16, 40)

SET IDENTITY_INSERT [dbo].[Eventos] OFF
GO
