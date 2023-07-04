USE [ProyectoFinal2]
GO
/****** Object:  Table [dbo].[Amistades]    Script Date: 4/7/2023 16:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Amistades](
	[IdUsuario] [int] NULL,
	[IdUsuario2] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 4/7/2023 16:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categoria](
	[Id] [int] NOT NULL,
	[NombreCategoria] [varchar](50) NULL,
	[Imagen] [varchar](50) NULL,
 CONSTRAINT [PK_Categoria] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Colaborador_x_Evento]    Script Date: 4/7/2023 16:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Colaborador_x_Evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 4/7/2023 16:05:37 ******/
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
	[Descripcion] [varchar](50) NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Publico] [bit] NULL,
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
/****** Object:  Table [dbo].[Invitado_x_evento]    Script Date: 4/7/2023 16:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invitado_x_evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Participante_x_Evento]    Script Date: 4/7/2023 16:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participante_x_Evento](
	[IdUsuario] [int] NOT NULL,
	[IdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 4/7/2023 16:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsuario] [varchar](150) NULL,
	[Contrasena] [varchar](150) NULL,
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
INSERT [dbo].[Amistades] ([IdUsuario], [IdUsuario2]) VALUES (1, 2)
INSERT [dbo].[Amistades] ([IdUsuario], [IdUsuario2]) VALUES (1, 3)
GO
INSERT [dbo].[Categoria] ([Id], [NombreCategoria], [Imagen]) VALUES (1, N'Juegos de mesa', NULL)
INSERT [dbo].[Categoria] ([Id], [NombreCategoria], [Imagen]) VALUES (2, N'Fiesta', NULL)
INSERT [dbo].[Categoria] ([Id], [NombreCategoria], [Imagen]) VALUES (3, N'Deporte', NULL)
GO
SET IDENTITY_INSERT [dbo].[Evento] ON 

INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (1, N'Fiesta Milagrosa', CAST(N'2023-06-24T00:00:00.000' AS DateTime), 800, 200, N'La mejor joda estilo proyecto X.', N'Guardia Vieja 4000', 1, 16, 30, N'https://cpad.ask.fm/379/040/503/-389996995-1ss3e9t-jmbfo9dgb80758a/original/noche.jpg', NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (10, N'Partido F11', CAST(N'2023-06-25T11:00:00.000' AS DateTime), 730, 22, N'Partido de futbol 11 vs 11', N'Kdt Salguero', 1, 17, 27, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR4IA5GHB-bSOmjbdbp8wId-msP_7IMkjmzZhPIAR7q71ybdBWGzdqFByAVQGmN_u7w8&usqp=CAU', NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (11, N'Fiesta Mambo', CAST(N'2023-06-20T10:00:00.000' AS DateTime), 2000, 350, N'Fiesta de Halloween con invitados especiales', N'Cnel. Niceto Vega 5646', 0, 18, 30, N'https://www.infobae.com/new-resizer/03cWHX6JXFJZKedDIcaCgpG92MQ=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/22070150/BRIGADIER-GENERAL-JUAN-MANUEL-DE-ROSAS-6420-La-Matanza-Mambo-1920.jpg', NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (13, N'Joda Anat Indones', CAST(N'2023-06-20T00:00:00.000' AS DateTime), 1500, 60, N'Una fiesta distinta e inolvidable', N'Guardia Vieja 4083', 0, 16, 20, N'https://http2.mlstatic.com/D_NQ_NP_602248-MLA51168949613_082022-O.webp', NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (15, N'Partida de ajedrez', CAST(N'2023-06-02T11:41:00.000' AS DateTime), NULL, 20, N'Partido de ajedrez', N'Jorge Luis Borges 1689', 1, 6, 80, N'https://www.mundoprimaria.com/wp-content/uploads/2020/02/ajedrez1.jpg', NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (17, N'Partido de rugby', CAST(N'2023-06-02T11:41:55.707' AS DateTime), NULL, 30, N'Partido de rugby con los pibes mann', N'Av. Pres. Figueroa Alcorta 5575', 1, 14, 24, N'https://www.eazycityblog.com/wp-content/uploads/2015/06/url2.jpg', NULL)
INSERT [dbo].[Evento] ([Id], [Nombre], [Fecha], [Precio], [Participantes], [Descripcion], [Direccion], [Publico], [EdadMinima], [EdadMaxima], [ImagenEvento], [idCategoria]) VALUES (18, N'nombre', NULL, NULL, NULL, N'chicas lindas hay', N'jose bonifacio 69', 1, NULL, NULL, N'https://www.infobae.com/new-resizer/03cWHX6JXFJZKedDIcaCgpG92MQ=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/22070150/BRIGADIER-GENERAL-JUAN-MANUEL-DE-ROSAS-6420-La-Matanza-Mambo-1920.jpg', NULL)
SET IDENTITY_INSERT [dbo].[Evento] OFF
GO
INSERT [dbo].[Participante_x_Evento] ([IdUsuario], [IdEvento]) VALUES (1, 2)
INSERT [dbo].[Participante_x_Evento] ([IdUsuario], [IdEvento]) VALUES (2, 2)
INSERT [dbo].[Participante_x_Evento] ([IdUsuario], [IdEvento]) VALUES (3, 2)
INSERT [dbo].[Participante_x_Evento] ([IdUsuario], [IdEvento]) VALUES (6, 1)
INSERT [dbo].[Participante_x_Evento] ([IdUsuario], [IdEvento]) VALUES (7, 2)
INSERT [dbo].[Participante_x_Evento] ([IdUsuario], [IdEvento]) VALUES (8, 2)
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (1, N'DominikPoleto', N'1', N'Domingo', N'Sarmiento', CAST(N'2005-12-04T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Un hombre con gustos refinados', N'Buenos Aires', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TMr2wtoQNaQtJLL0qwWanstbxnJdsSFV5y8V_F4x&usqp=CAE&s')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (2, N'SebasPolo', N'2', N'Sebastian', N'Polonsky', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-24T00:00:00.000' AS DateTime), N'Me gusta el tennis y el cricket', N'Buenos Aires', N'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFhUXFRgaFhgYGBcfHhkXGBUWGRcZHhoYHigiGBslGxcYITMhJSkrLi4uGx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS8yLS8tLS0tMC8tLS0tLS0vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIASkAqQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABIEAACAQIEAwUFBAcFBwMFAAABAhEAAwQSITEFQVEGEyJhcTJCgZGhB1KCsRQjYnKSwdFDU7LC8BUkk6LS4fEWM1Q0NWNzg//EABsBAAIDAQEBAAAAAAAAAAAAAAAEAQMFAgYH/8QANREAAQMCAwQKAQQCAwEAAAAAAQACAxEhBBIxQVFhcQUTIoGRobHB0fDhMkJichRSI5LxFf/aAAwDAQACEQMRAD8A3GiioPtXx1cHYNwwXPhtqZgseZjZRufluRQbXUgEmgXvHO0FvDFbft3nICWwY3MBmPuJPPyMAwazjth2qxi3Wtm4VSWyd1KAqHZQcwOafCQRMeQmkOxzvicXcxFxi2RZJO5d/CGPLRVcRsBAERUtx/hQxeGJtw1y29xkggzLsWT8Qj4haxcR0iWThmjbV77+lPE7r6EcDWHtXVFTE3L9xUgO7MFXNJ1JjUk7dTVn7Uzg1sCyzIqKVJRihZ2JYsSvPwE/GmP2eYINfe621pNJ5M8ideih/nU72zw4uYa6eaXEuLIiVVVRiJ3ADPVM2Kc3EtYDYa8zbyBFFe4CoFEz4J9oGJtkBn75fu3NGjycaz5nN6VpHZ/tFZxa/qzDgeK23tL5/tL5jT0OlYPw3h9y/cFu2JY/IAbsTyAq5cZwgwVqwbTsLlu4C133izo4E/s+AjLqIJmZM6H+YI3tY43P3z2KmbDsP6bFbDRVZ7HdplxaZXhb6jxKNmG2dfLqORPmCbNT4IIqFnOaWmhRRRRUqEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFZzxa8Mbjr9ltbVq0bQj7zSLpHQyVH/wDNTV84hcK23ZdwpM9NN/hvVJ4nZsqP1aqGZhMRL5jLZiPaDHeZmsjpbFCNoiGrtvePFM4ZlTVVjg+EfD2LisuYfpHiIHhe0qAA+a5jOkxz2pbgF12vzbMLkIduXVRroTO3xqz0CkHHNWu38fC2WYkthdFTXb+E0wmCWyzuk+O4LjrCwSInQAdJjmZ613xO4MR4ApgznJBAhgQw16gkfGnIFE1S+BrnBx2JSig+D4MYGyQQDddgDc93nlHUACTHM89ogu1fEme2VfK0ssMNIyFo9Qc5q54rDrcUq2x6bg8iPOoPHdmgbdzKxZypC95EDUERlGhkb+Z6zV7cpk6xwvWv3YE1E6ERuDxV2z/31VU7PYm8L1sWc3egzbK7g+c6ZYMGdIJB0rcOA8VF9IbKt5VQ3UUzBdQwInUqRsfUcqpHZzhdvC2GYQ1zKTcbnIE5BzAHTnvzqBxvFrmFx7G20NbFtROzL3NqUbqDH5HcCncLjs8xjAsPkDu1CQni63RbXRUVwDjNvF2hct6HZ1O6N0P8jzFSta4NVnEUsUUUUVKhFFFFCEUUUUIRRRRQhFFFFCFEdrHK4HFFdSMNej17to+tVPAYBLSIoAlVCzzMCCZ86uvGlnD3h/8Aif8AwmqnWV0kbt707hNCiiiis1Nrqa5oooQiiiihCEa0EbOFzSc0xJXXKIPKP5+dZzx3C3L2LyorO7qpA1mAMoYk8oUeI6edaI9sHcA+oFDpqCDDDY/mD1B6fkQDXELTFI6QGpO/78IFlH9muD3MGO9a9N3wrlX2CGdRDTq5E6HSKuvZ7jtrGWhctmDAzofaQkbHqOh2Pzqo3uMWiVRjlOdQx93Qz7W0SIrPOA8Xu4a4hRmDrCggTOwyMvvgkbenMAjR6OxMpzCXh76eH01Jqmwpdc2PHavoiioTgnGu9CreTub5We7JGo6qefXKfEOY5mbrYa4OFQahZpBFiiiiipUIooooQiiiihCKKK8oQubiBgQdiCD6GqOgIEN7Q0b94aN9QavdVLjOHyXm6P419dnHz1/GKz+kGVYHbj6/miawrqOI3+yZUUUVkJ5FFFFCEUUUUIRRRXoFCFVcRgMQ0W+7JgBQxjLl6z/LepPgPBLOEYsfEx0W40eEfd/ZnXxc9tNBUuTXOZQVLxlnxTtEGJ8piomdWNwOh1or58S+UAGltyrXbnEFQlxT7N7KCCQQe6RwQw1BEEyKnOx3b7vIs4mSeV0Dpv3ijaPvjTrESY7thgv0pQlnKWUht4ECRv6MY9fWnnB+E2sNZ/VGWYqHubMxzgRG6gE+zy56ya6wmP6jDtNKmtKfn03+JCkjGubQrRkcEAgyDsRzFd1ifAe2l7BXXtt47QuOChO0OQSp90+Wx10BM1rPBeMWcXbz2XDDmOanow5H6HlIr0UcjXioSEsLo9dN6k6KKKsVSKKKKEIooooQiozjeDNy3KiXTxL59V+I+oHSpOiuXNDgWnQqWkg1CoqmRIoqS47gO7bvFHgY+L9lyd/Rj9fXSNrz00RiflK1GPDxUJLEYgIPPkKj3xbnnHpXGNvasTOnTyqLxPaXA2VJvXjccAzbs6gRyNwQubrDCNd4mojifIaNC6c5rBUqSLnqfnXSXmGzGpLhWCS7Yt3HtFGdFYpnueHMAcsyJImKZ45cPbvCycQLdxlzItyMrCSIVjEtptJOo0rs4Z1aBTnGqWsY7k3zp5M7VE4nCvb1ddPvDVfny+IFFjEFdtulVEEWKmilqKTs3gw0+VKVCheKoGwA9KrHGrwDuHAzAyCT7keGB/PrNWiuLlpWjMoMbSAY+dSDRMYafqX5qVWecP7NXsRdggorDOXfWVY7gTLmflpMSJtdzAjh9q5cwpK3bdsMXbUtNxdGG2UhGECN50OtTLoGIBMSw15r5jziaje2jC3h7pBJzrlM8xm0PlBY/M1XJiZOujaHUuLDnt318OF1RI7O4212bFZuxva61jkjRL6iXtzy2zIfeX6iRO4JtFfO/AMDi2uJdwisGUytzZQdvaOjDkVEyDEa1tvZbji4u1m8IupC3kUyFcqG0nUqQwIPn1Br0cU7XnLUVCz8RCGGrdPRTdFFFXpZFFFFCEUUUUISdy2GBBAIIgg7EHcEc6qvE+HGwZEm2Toeak7Kx/Juex1gtbqTuICCCAQRBB2IO4qmaBsraO8dysjkLDULD+2FnEXsuHw6ElyS8BjoCAFhAzEEyTlBgLrpNe9kPs/tMe8xLtca28GyUa2FYQRnW4A7CIIBCgg7EHXQsdiLHDcPisaqzDZRMnKA4thZEnKLhZzuYPkBTTheNu4pRfuIttmXLKgjvLau5tOFfW2CrE5Wk68qXawww5a34bfoTAIlkrSylKrvbPssmPtqM2S6k928TvGZWHNTA8xAPkZ52CKSZhQSdzoBJ8zTTGcGAt9/jMW1gn3VFnIggtlm5bYuQoOYzGhIA3quFjiat2K6VzAKO2rGsXgOJcMMnvbaD+0tMWtepGwHk6j0q6djOKDH22HhS/bgsBolxTMMB7hkQQNNjHi0u+DDAG3cKsViHX2biMJRxJOhBiJOoIkjUwPD+yy4fiBxGHUJauWLiuo0VbneWiCo5BgCYGgKnrXcrw9pa8XVcbC0gsNkx4fxBLozWnBgkGNwRyP+tamMPjQdG0PXl/2rEeH4m7hXlWyunhbocujAjmJFaP2d49bxaSvhdfbTp5jqppLFYQw9pt2+nNWQziSx1VyoqKs4hl226GnlrGqd9D5/1pNX0ThlkQaSGEUyWlpBHiM6EQRrvpprSy67VzfXMpUGJBE9JETRQVqoTL/a9sBrXecsqNrAzeGC2xiZmdR570bsT2pNjizXCYs4m6bbjkAzRZPqpKiehapvGYG/dOQ2yJhSxjKAPMb+m9VzjfDMPhbDOEzXWORS5mH1nTQCIbUCdKYwpZA+rQamwAp38vtFfi8PGwBrXVqOHt6cF9FUVH8Bxvf4WxeP9rZtv/Git/OpCvQLARRRRQhFFFFCFxccAEkgACSTyHWoDC9sMFeLph8Rbu3FUsFU+1H3SdHEkarO9MftZLjhOK7uZypmj+77633vwyZp8prNex/HeG4fBp31j/e0usxud1mZlzOUyXPdABVIJX3jsZMOJANFLQCQCtDv4BW/Vkkq5zXF0yvBDEkEGCXgmI1JNP2NUTs729GJxfd3US0hRhaMkktmUwzbSQOQ301qzcW7RYfDCbtxR0HM+ijU/Ks2QPBDXarSjLSMzdE7xDypDqQr+GQQSM2moiBvymoXtlwK/j0tob4GQtJBdMyOAHRgsyCBG/M1B477ScPmUBLroCCxUKNjIADsJ+Mf0tHBe1GFxUC1eXN9xvC/8Lb+okV0OtYKgEdy5d1bjSoJ5p1wfAmzaS2WnJbt218ktrCieZ1J2G/xL6mvFltdy/ftltBSXbMywOuZSCD6GqR9lHGrt3v7Fx3dbeRrbOZYK5cFSTqfZB8pI2iucpeC9dZg0hm9Uf7QcH3ONxCxAZw48xcAdj/EWHwq49hux1mzbt4nE3Ct51lVDZQqMNAR7xiCQdBpppNMvtS4eLuPwyDe6ttG8h3rifkzfKr/AMMtAMxI1Cj6ltPgFAHx6mrZZD1bRvH4VUMQzucdh/Pwo7GYfI0A5lIBU6ag+nP+opILTniKwUU6EISR0zsTHwiKazWRIAHEBOBdC4RsSPSuxin+8fpSdFcIXaszMuupYAE8pIFM+2/Za1dVX71wVfyghozHL103pwFnQb8vWu1R715bclx3qKZ5J3iLcJjzJA8ytVlsznt6o0v6+tteAXLiG9orQez2E7nC4ezr+rsWk138FtV189KkaKK9YsdFFFFCEUUUUISGJsLcRrbqGR1KspEhlYQQRzBBrDO1/wBl2IwzZsGRess0LbLAXE0JyyxAcQDrIO2h3reqY8VslrRgSVhhG5ymSB5kSPjUOrQ0UtpW6+ZL3ZzGrGbCsskLLlVWSYAzMQok+dOuO9jMdgrS38RaHdt7RQh+72jOV0AOuoJHnJE6z22w/e4G8E18AcRzCMrmPgDWb8P4XxJbU2u9W2RsLhXMD+xmEzO0a0szEk/t8FqR9GtkbmDwDWl/vt3qoqwO1DKDuJFT2N7EYpEL9x8FdCf4Z+gp32I7CNjD3l/OlgGNIDOw3AkaAcz8BrMW9c0CpqFRL0fIza0jeD+NVWL2JZsqlmcyAqyW1OgAHXWNOtbF9mnZt8JYZ7wi9eKll+4ig5EPn4mJ9Y5VL8E7K4TCHNYsgP8AfYln13hmJKjyECpk0tNPnGUaIigyHMdVj/GuJm5xu2bisgS4qIHBU5FzANDcmdmIPQitNHE7YWVWSfuRBPmRt6mi7g0xN62jIrgOpGYA5QpzFhPsnTQ9Yq2X+FWXJJtgE7lZUn1KxPxqCwzNBbaluCkuEJo69brO7twsxZtyZP5ADyAgV5V2vdnFPs3D+NVYfTKfrTV+zDcjab8JX/qpJ2Cn1pXvHvRWDExlVOhEJ2E1aV7OXOlkfEn/ACU8w/Z779wkdEUL8CTJ+UVy3AzE6U7x7VQcTGNqq1rDsvsqXutoijXXqegHMnQddajRirmGZwLihluZSMoP/tNpLMJIzLOkTp0rUcHg7dsQigTueZ9SdT8ahuK9k8PiLnePnUn2gjQH9RH1EGmxgXMbVh7XePCi6w2MhEh65tW03A+Rp+NU+7PcQ/SMPavFcpZdRyzAlTHlIMeVSlMVNqwlu2IRdERfoB+VPq0m1pQ6rNeWlxLRQVNOSKKi8TxVUcIFLMWVTEaFiPmQDMchvFSlAIOi5LSNUUUUVKhFI3r6roTqdgJJPoBqaaX8ZPsmF+9pJ8lB0/EdOk7hmrknKgMnUgbnzLHf1JrPxPSDInCNgLnnYFayIm5sFC8axi4e/aWGVL7MIOWFYCdIJIDE7GNZ6wOFsqTCXChHuGCB5idY6QYo7ZcDe/h8ojvFIe2QdCwBlJ0gkEx5weVVDhfakgd1ibcspjUCZG4Kts3WI9KWZNISc7crhqNbHQrYw0RliBiNSLEbeB9lbm4asg3bhboNFBPoNZ9DT+46ovIADbyHIVWl7RWl1VIPkqz8yai8d2ja4pIU84logg76bxGg0HWuy6tyVd/hYl5u094orfe4mqiTAHUkAfWoPi3apF8Kg3GMBQmgJJgDMd5PSapjcQQ6h8xjeST8zVu7I9m2zjE4gQRrbtnrpDMOQA2G86nUCqJpmwtzO7hvP3U7ExLhIcO2r3VO4fN7bzam9WPCYK4nizw5EHKxHwHlPzp0vF79k/rPGnOYBHmGGhHqPiKc0nftBhBrDjx2IjdmDz41HgahZLmtf+oD3U5g8Yl1cyH1HMHoRypzVHwZe2SUMMn+HkCPeGhHwnQ61aeGcRW8Ojj2l/mOo869PgOkmYnsus/dsPEe41HK6SmgLLjRP6KKK0kuiksReCKzHZQSfgJplxDiqWtPab7o5eZPuj69Aah14i+IktAQMQAs6sp1JJ9qGEDQagnpCz8VG1/V1q6labue7vvwVzIXPvsXpV8RdCnfQuRsiTOUeZI33J12ECUx/EgJW2QX2J3C9Z6n9n5xUGutx9TAUBoJgk6wQN4HI/eoxW2QaAq0xGigAQOQOo+tUCYtBpqdqbdCHEV0GgTe1eY3R3eYNBFrRTmLe1clgY56xqCTrNT/AOhYz/5S/wDCWmvZaxnzX21YqqDpAUMxHqxj8PrVkpiBlG1O1L4iTt0GzgD6oqOxd8NI9wGG/aPNR5Dmfh1rvGXt0BjSWYcgdgP2j9N+kx7sWIVQByUcgP6ACfhSfSGNMdIo7vdYDn9+3pxFHW50Rq53AAGp5KtePcBGVJCfV/NvLy+fQe4hwBkU+BT4j95hux8gfqOgFRN3icP7JKjSRvOhOh3ABHzrGleYc0EJq/8Ae7af4jcAaC2p3K1z2Mb1kho3QV46VUrYuZAVjMh3Xoeq/wBOuuhmYvjPZLDYzxe/HtA5XA5SYOYDlmU+tP7N5XGZSCP9aeR8q6Kg71VD0gWgMmbmA0NaOHIj0t4WVwBac8bqHgqVi/s+NtWbv7qooJMqjaASfZcflVQ4fgrjX0w5Y5XcLIAzDOx6mN551qHanFsmHIztDGNTPusw1Ou4FZ9wMk4y1Gh761H4AXJ18jWrFLE9nWNLqcctRTdT3JW7gpMQ7DySPdcVA7mk/HgmuP4bcwl+7ZXQo2it7yHVGDDTUH5yKl+z/aV7bZTI6q3/AG0+I16ztVp7XcCbFKLiN+vtjwkwAy7lDAGk7HkSepqgkkMUdSlxfaRhBB/mPOuWzRYgENuNx15m/mNOBTGDfFi4BHJqBce43eldlFsWDsd6i3EuKVYaeA+hB8W4Oldvgrg2hvQwfkdPrVG7G8QGbu3jXafvAafQR8Fq5o7L7LMPjI+R0peY4Bj8j4iOIJ9z7Lz2Iw00EpZm09NiYYjwXVbaTlYHfxQNjtrlNdXrJQi5bMEa/wBdOY6il+Lv3tohgFceyw2M6EeW8x5bzTmzhrjKrQNQDo3UTzH86Xf0dJUSYU5xsIsRwOl/tAqxMNH2O3inNni6G33jHLrlK7nNEwI3019OmtR+I4xcueG0uQddC39F+vwqMuWD+kZMpzHSOgkHfaNam/0ZU0dwP2UEn8iT8hT7p+kJ20a3IAKFxtfbrp3ab91eSFhrrw/8ULi7ORZmWIJ+PWTqTPOndiyEUKogD+sn6024+6gSgfRZknnPSdvhUZgeI3blxLeZRmYCcsxJ9aowsbIDTO1xcf2knzptJTAfmFTam9TwUDYR/rWkEtG85S3JJ0ZuVtefxPTc6chpLW+Ar/aXHfyHhH01+tSliyqAKihQNgBAraZhj+5UPxLR+heYXDLbRUQQqiAP9c/Ol6KKdSKgWu5h6ksfiSF+SgD5UlbxQTOTKtAVSRpqdTIkD3d42pQr4FuDYqofyIAEn4QPkec15XksXJJhcaZCK1rlruIpUcRUp6MB0dFGY2/AgbLyHPoP5VG3hBjpv+9JLf8AMTU0mAXvNhkEsV5SICR01M/h0phjOGsmqSy8xuw/6x9fWl8PljYKm7vQW8zXw2LO6ZhmmY0RCobcjbX3oNnFM7N1kOZDB5j73r5ee4+hm8Hj1uabNzU/mPvDzHxjaoFTOooZZ/l5HqDyPnVkkLX66/dViYHpOXDdn9Td3xu5aJbtq8WRPU/TL/Kaiew3CWa5+kuIQAizPvFtGuekaDrJPSn99Q5TvlF5UMhXPPzI9sDowNTdrits7yvqNP4hIHxNcudIyDqmjfUjnu1+8V7DDdO4eTDdQx1CTetjssPDUE7k+plxLhNjECL1tXjY7MPRhBHwNObd9G9l1PoQfyrl8ZbXd0HkCJ+VINzNNRUHhWq7zZaOrTj+VX//AEZbDBrV+/bIII1ttBBkEZlB+tWS2DAkyY1MRJ6xypk3FrfLN/CV+rQK4/2yn3Ln/J/1Vc/r5KZqnmqJuk4XH/kmBI3uB91IXFkEHmIpHh1xu7HifQke02gViBpPQCkLfFbZ9rMvqNPiVkD4ml8CPbjbPp6FVI/Ooa6WKtCW95HpzXcckczasIdyukLpY4gSx9mZ2Ow5j09afKoG1NCB35J0AtgyfMsP5Up+nWx/a2/4h/WiWeaemcl1O/6eJXWVrBuTDj/st+7/ADqI4EP95s/vr9DNOuOcStmVzGSumj9RzIj3qS7MpOLs/vMflbc/nFNYFjhIyo1cPUKHSMcw5SDQXoarSqKKK9ms1FFFFCFDFymoE+J1ZeoDHL6HLFcNZEZrclea81PSOY8t+kjZrxa61q65EspyOV6SMkrOx8G2xnlz6w2IDQ9tvKT+TA/kdR5V5zGzNZK6LECsZuDtaeHrTnroboJGvqGHtDUcN/58UnhsYjZ1DDNm2/ZTTTqAxbUUvVA7Q4lu8tuCQxBuAiQQzuzGKnuz/aMXSLV2Bc91tg/9G8ufLoEsdg3M7TTUAAcbfOp533rbfgXshEzbg3PD5Cksbw4OSyeFufRvh18xr6xFRFxCpysMp6cz5g8x/oxVmri9ZVxDAEdD+fkfOk48QW2NwvP43oqLEVcOy7fsPMe+qrdFSN/hJGttpHRt/g/9R8aYXVKe2uXzYf5tvrTrJGv0PyvNYjAYiD9bbbxcfjvok2tg7gH1FehY2oVp21r2asukezwXtFeTXlq4DoGBPSZPyGtFF03tGgXYFNhaXMwyLEA+zzMg/lTvuH5W3j0P5HX6UkCP9b6co5HyoDhsVr45IhV7S2u8EV4XCRW14ySBAChQRoCMxMA6DcbUvFFJ4m7lVm6D/wAUKtxLjV1+d1E33zXGPoo+JBP+IfKrF2Ltzip+7bY/UL/mNVsLAUHcsJ9dWP1FXHsFa8V1+ioo+JYn8lpjDCuJZ3+QK9F0LbCSH+Xs35Vzooor0adRRRRQhQHaW2YDBSQVYGN5EMum5iG261V7Nwg5kaDpqOY8+TD/AEIq6ccuFLXeBcxR106hjkaPPK5I8wKgLuDt3gLiNGYSGHstPPLz9RB86wOly1jwXaEeiUxHR0sv/NC6jhbd57Dz14Kj8cuSyR/dID6xqPnUZWgcf4AL9u26Qt0WU12DwuzfyPL0qg3bZQlWBUgwQdwehroTNe9wGoN/nkvpPRmKZNCALEC49+Xp4VtfZ/tRtbxB0926fycnf9759TcAayOaleC9oLtiF9tPuk7fun3fTb03rPxOAzdqK3DZ3bvTklcb0VWr4f8Ar8fHhsC0aio7hvGbN/2HhvuNo4+HP1EipGslzS05XChWEQ5rqEUISFzCW21ZEPqAfzFefoFr+6T+Af0pxXtTmO9VloOoTYYK2NrSD0Uf0pyNNq8orkmuq6ApYIpF8MhJJQEneVGuka9dK6v4lE9p1X1IH50ywPELbPcAuofGIhlPuKOvUVIB1CDQpW5wu0fdYejMB8pj6UzxHB7bsE8RA8TeJvwjSOcn4DrUtdfKCT/56AeZOlc2Ega7ky3r/QaD0FWCV9LOPiUucLATmMba/wBQfUKtccwdu2VCAgzzYn3TO58xVo7EWcuHLffuMfgIX81NVbtFcm56A/Ugf5TV/wCE4fu7NtDuqgH96PF9Zrd6FaS4vOwep/BUYgNYwNaAOVtieUUUV6JJoooooQmXF7ZaxdA3yNHqASPrFZjwnjhw150aWtZzoN18XtL1B3I+I1kHW6x3jvA7tt2YJmt5iAyyYCmPENxtvt51ndJMY9ga/Q276bOK3OhDC8vhmNnUpzG47728L6LQUeUtx/dJ/hFQ3aDgK4gZlhbgGjciPut5ee4+YMfwTjilbeHvNDC0rW3jQLrkk8iEA30I+tls3JGuhGhHn5eR3FeYxDnxzl4sa25e4VMUhjcHMdpoRtuRUV2Gh4ELLMVhmtsVdSrDcH6EdR5ik607inC7eIXLcXb2WGjL6H+Wx5iqZxPstetyUHeJ1UeIeqbn8M/CtCHHRvHasfLx9l6XC9KRyDLJ2XeR+OR81B1JYPj2Jt6C6xHR/EPm2o+BFRpUgkbEbg6EeoOoroJNNvYHCjhXmPlaEkUcre2AR4+CsdntndHtJbP7oZf8zUo3bV/7lB+Mn+Qqr0AUv/hwf6+vylv/AJmFP7PN3yp6/wBrr7ez3aDyQk/NiR9Kjb/F79z27tw/iKj+FIH0pm2m+lLYfB3H9i3cbzVGI+aiKsEMUYrlA4/k1XYwuGhvlaOfybps75QW+PrUdwlpLySZ1+RIqWx/BMSwyi1z5lRJ5CC01FY7gt+xlDIVDHLmBUiTylSYJq5krHdkOBPNQcWwvaGuB4A+isvZrjXdXPEXayAQFUyA8jxAExoMw06noKsl/tpZUE91dMCde7A/xE/SqLbQKABsBFI49oQ+elLyYSKV+Y/fvmqpujYJCXurXhYeiuXZ7EnG37bZMoLgRMyqfrDOgidRWqVn/wBlnD8tvvSPdgernO3yGT51oFavR8LY4jl0JPhoPnvqvF41wMzg3QaIooop5KIooooQiqx2kZrQdgDDgQR7p0VvjADDqZ6GrPSWItBlZW9llIPoRB+lL4rCtxLMjt4Pf9qO9SCbgGlRTx8VneK4bZbubeRc91HBcAjMGZUZRcAkqO8ABEwAKisbxNuHsMikqLxttbZ2bwhBopI08UkevnU9cNw4C1dEZrbkySR7Trc005OAI6UjxrggxmJxlkDxQLlo/dud1YyyfdDFbin1aslmDYWtBqc1Df8Ak0nlqDQ0qk4MS7OzL2WnJYf65HUG+xB8VMcL4nbxCB7Z3QNlPtBXGkj+e2hp7WR2Lz2WzoSr2uHWlB6OWtn4+1satvAe2YuW5xChIIUuNiTMactvSsaXBPAzMFR5/n7ZaeExglZV1tBzqKim3btVpxWDt3BFxEcftKD+dR97s3hm/so/dd1+isBT2xj7bgMrAg8xqPmNK7OKXr+dKtkcyzSRyJHoVoMMjDVpI5VHoon/ANKYb7r/AMbf1paz2awy7Wgf3nuN9GaKXxHE1UEyBAJJYgQBqT6CoPF9rLYuLbDHM+WNCF8fsyx5GRtO9XNfiJB2S495+V3JipWg9ZIaUJu46DW1VP2sDYtezbtJ6KoP0E0nisfppp58z5AVn2L7a3cxC2lWDDBiS2h1E6AH4GkMV2lv2r6ksGsuFZWyrmNp/how10HNauHR8ztaeNT5VSzp42uAuSQSNtabBvO4bq7lfEUk5m+A6efr+Xzla3YRzldQykaggEH4GkSAbFu/bdmWQtweHckBSpy7NIj95fOnN/DFbttc693dE23ynbTQ+Icyv8Q6Guj0ZiNRQ6aHfodnLXXVVjpGBw1OzZ/toeR056prc7J4cnTOvkHn/EDUdxHs9hrYJylyoMZmkZjsMogHWBqOdTVmzdZryCCbPLMwzA5ogQd8u3mKRsvAs33VTZ7xs0EkgqxyzoJ1GcbzlHUVYzD4wuAeSG7Tm0AIB0Oz7tVzulgGEmUmxtV2w0Ou46nZqrR2fwHcWEtxBiW/eOpHw2+AqTrlWBEjUGuq9c1oaMo2LMOt0UUUVKhFFFFCEUx4phTdtNbV8pYRMTpIkEcwRodRoafUVBFRRQQCKFQmO4IHspYVsqBpaRJcNJbYiCSxM9eVI4/DGwl57Qe491gIEEiS23pmMfhnSTVhorgxN1Fjv3a0pstUqsxN2WO/dYi2y1Ssd7X9n2w1y4d0vYS4T5XrZtsyj9nKJHx6VUsx/RDH/wApZ9P0e5W29tsEbmGLKuZ7LC6q82CSLigcy1tnUeZFYfh8Qnd3kMhWGa3z8SN4AY6qSJrOxEQjd2dLHwsgMcK5QaAxm38TQjuaAeQO5K38Q9vD2WtsymbklSRMMkTG9T3CsTdbGM5d2sGwLwVmYqFuZCog6b5h6TVeujNhPNLxnyS5bEH+NKvH2eYLv8PdMS/6PaVR1Fm/fKj0MKPjVIjznS/a8aFw9PNcTGQNLWG+aRuu0kyN8h4Eq58XsLYv27gVRbYMlwAACI5+UHMfK3WUdq+Dth2KGZsEWgeZsGXw7/KUJ+8prWLJGLwRESwGx3LLqs9MygfBiKiuK8NXG4Rbw9tbbW36tanX8QyrcX4j3jTkzc/ab/YeQcO+x/saqsPyvEjL/vHEUo4d4II/kQsq4l+sVcQN28F3yvKsk/iXX1BrwjvMKQd7VwR/+u4DI/4gB+Ne2j3ff2XMeBwN/wD3bR8BE9dR+Kk8HeVUvqx9pAFHUi4hH0BpMaW7vviE2BSMNbcNcwtP8XEejXOb/WhWhfZPi++s3LL7ZTbP4QCseeW4R+AVP2bZuYFlb2rTzPSfE8eiu4HoKy3spx0YW9Z3H+822b7vdm21q5PmA+aPKti4bh2K4sFWGdrmUERI8UEdQQRrTkLM7cp/kO43/CXkgIeWEWJeO51HeRsE2F8pes4j3by5bp6MAqn6hfQI1e28Otq8+GuD9Vejux0I2IPIiAJ5ZbfM0m+EY8Py3FKsLjGCIIDYhhsdpRj86c8ZBu4S3d2cLbaehfIG+U5vVRU1OXMRsDqcx2m07q/2NVTU5S4i9A+nMdtvfQm/7jXYveCX2s3Dhbp1GtpvvDxMRHIQCQOUMPdE2Oqzx79ZYt4ldHUIy+lwqI9AxU/A9asGGvi4iuNmUMPQgEfnTERyks3acjp4U8KE3KYh7JMe6hHI6eFCOVCblLUUUVcr0UUUUIRRRRQhFFFFCEVgPb/gwwuOuImiXALqDoHLSPIZ1eByEVv1Yl9rOIz8QIH9natofXx3PyuCqMTTIroP1qoLcIDKCQGgMOsGRPxq2/ZVxpreNt2HPge3ctqI94t3oJP4WH4hVPp32cQnH4ULv+k2PkLqFvoDScVnj791V8kbTcjj30pXwtyX0FhuGIl57ylhnGq8pmSY6/lLdaWwHD7dlSltYUkkgknUgD3idIG1PKK0Q0DQfTqkAxo0H06rI/tN7JLZjFWVPd+FbqyTlOiq8kzB0U+eXqaz62tfSuMwqXUa3cUMjqVYHmCII+VfPXaHhrYTEXMO0+BtD95TqjfFSJ85HKk54g01Gicw7xly7vRRWMAI2/0a+h+xnEv0nBYe6TLNbAc/tp4H/wCZTXz24kVof2Rdp1tk4G8YzMWsMdsx9q35SfEOpLDpM4d4Dqb1M7atWr3bSsCrAMDuCJB+Brk4dMmTIuSIywMsDYRtHlS9FOpRJJZUKFCgKAAAAIAGwA6UrRRQhFFFFCEV5XtFCEUUUUIRSd24FBLEAASSTAA6k8qyT7TeM4/C4suHv28OVTu3Se728QaNA+ad9SIqk8Q7Q3cQB32Ka4v3Wfw+uWYnziqnS5TSiZjwxeK5hRab2s+0lEBt4KLj7G8fYX90f2h8/Z29rasrxF1rjs7sWdjLMTJJPXrTW5j7Y3cfOleE2cRjX7vBYd7pmC0Qi/vOfCvz+FUHPJsTgbFCPtUSeny/pUr2JuAcSws87wAn0IG/nFVzF484e7cs4gBblt2RwOqkgxpqNJB6RUl2L4kt3iWCCo7gYhCQokjUQ56Kpgk9AahsRDtFxI6ItJDl9O0UUU6s1FZV9tGCAfD3gNWV0Y9cpVkH/M9arVc7ccAGNwrJMOh7y2YnxqpEEcwQSPiDyquVpcwgLuN2VwJWBExvSN+5EMCQQZBE6EbEHkQedLWwN+vOuyKQDVqdVvK+heyvE/0rB2L+ZWZ7SF8pBAuZRnXTYhpEcqmKwb7LOMthMcuHk9zidMvJbgBKMPMxl85WfZFbzWix2YVWbLH1bqIooorpVIooooQiiiihCKKKKELlhOh2qBxvYrh14k3MDhyTuRbUE+pUAmrBRQhVmx2A4WhkYDDn962G+jTVhs2VRQqKFUbBQAB6AbUrRQhNL/DrNw5ns22bqyKT8yKVsWEQQiqo6KAPypaihCKKKKEIooooQvn3t72fu4C/cc22bCu5a3cUaIGM92/JcpMCdxG5kCrf7Ws/f+h/8V9S4r2G/dP5Gvlftb/9w/EPzqowtJqmm4x7RRWH7N8C+N4jYe2rG1YcXLjwcq5PEonbMzZRl6SeRr6NqE7G/wD0lr0qbrtrQ0UCpkkMhqUUUUV0q0UUUUIRRRRQhf/Z')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (3, N'qq', N'123', N'sta', N'asf', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'Prefiero no decirlo', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'si', N'asfdan 123', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (6, N'CaroFormi', N'alkanalino22', N'Carolina', N'Formi', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'F', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'me gusta cocinar', N'malabia 2215', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (7, N'triponski', N'autismo34', N'Tripi', N'Lonsky', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy autista y busco mas autistas', N'guardia bieja 4039', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (8, N'Dipri', N'enanos123', N'Dirpi', N'Assando', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'Soy enano.', N'laboka', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (9, N'albert', N'sinbol33', N'Alberto', N'Sinboll', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy el presidente de la argentina', N'olasabal 222', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (11, N'FACUNDITAWX', N'foxy777', N'Facunda', N'Liponetzka', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'No Binario', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy trans', N'muñecas 3109', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (12, N'estanislao2322', N'almasidneio222', N'Estanislao', N'Norbert', CAST(N'1965-11-14T00:00:00.000' AS DateTime), N'M', CAST(N'2023-06-02T11:41:55.707' AS DateTime), N'soy empresario', N'libertador 4201', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (19, N'nombreUsuario', N'contraseña', N'nombre', N'apellido', NULL, NULL, NULL, N'soy amante de los aviones', N'direccion', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (20, N'nombreUsuario', N'contraseña', N'nombre', N'apellido', NULL, NULL, NULL, N'soy amante de los aviones', N'direccion', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (21, N'Polo', N'contraseña', N'nombre', N'apellido', NULL, NULL, NULL, N'soy amante de los aviones', N'direccion', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
INSERT [dbo].[Usuario] ([Id], [NombreUsuario], [Contrasena], [Nombre], [Apellido], [FechaNacimiento], [Genero], [FechaCreacion], [Descripcion], [Direccion], [FotoPerfil]) VALUES (22, N'Polo', N'contraseña', N'nombre', N'apellido', NULL, NULL, NULL, N'soy amante de los aviones', N'direccion', N'https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg')
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
ALTER TABLE [dbo].[Participante_x_Evento]  WITH CHECK ADD  CONSTRAINT [FK_Participante_x_Evento_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Participante_x_Evento] CHECK CONSTRAINT [FK_Participante_x_Evento_Usuario]
GO
