USE [master]
GO
--
-- Primero hay que creal la base de datos 'ProyectoFinal'
--

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE [name] = N'Evento')
BEGIN
	PRINT 'Creando Login'
	CREATE LOGIN [Eventop] WITH 
		PASSWORD=N'VivaLaMuzza123', 
		DEFAULT_DATABASE=[ProyectoFinal2], 
		CHECK_EXPIRATION=OFF, 
		CHECK_POLICY=OFF
END
GO

USE [ProyectoFinal2]
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE [name] = N'Evento')
BEGIN
	PRINT 'Creando User'
	CREATE USER [Eventop] FOR LOGIN [Eventop]
	ALTER ROLE [db_owner] ADD MEMBER [Eventop]
END 
GO
