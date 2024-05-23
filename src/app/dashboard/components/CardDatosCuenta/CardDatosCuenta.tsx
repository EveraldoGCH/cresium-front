"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/colorsVars";
import {
	CardActions,
	CardContent,
	Divider,
	Grid,
	IconButton,
	Skeleton,
	Typography,
} from "@mui/material";
import { Copy06 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useGetDatosCuenta } from "@/hooks/apiCalls/get/useGetDatosCuenta";

export function CardDatosCuenta(): React.JSX.Element {
	let { data: datosCuenta, isLoading: loadingDatosCuenta } = useGetDatosCuenta();

	if (loadingDatosCuenta) {
		return (
			<Card>
				<CardContent style={{ padding: "16px 24px 16px 24px" }}>
					<Typography variant="subtitle2">
						Datos de la cuenta
					</Typography>
				</CardContent>
				<Divider style={{ width: "100%" }} />
				<CardActions style={{ padding: "16px 24px" }}>
					<Grid container direction={"column"}>
						{/*Contenedor Alias y cvu */}
						<Grid item>
							<Typography
								variant="subtitle2"
								color={colorsVars.grey500}
							>
								Alias
							</Typography>
						</Grid>
						<Grid
							item
							container
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Skeleton variant="text" width={"70%"} height={"auto"} />
							<IconButton style={{ padding: "3px" }} disabled>
								<Copy06
									style={{ colors: colorsVars.primary600 }}
								/>
							</IconButton>
						</Grid>
						<Grid item xs={12}>
							<Divider style={{ width: "100%", margin: "16px 0" }} />
						</Grid>
						<Grid item>
							<Typography
								variant="subtitle2"
								color={colorsVars.grey500}
								fontSize={"18px"}
							>
								CVU
							</Typography>
						</Grid>
						<Grid
							item
							container
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Skeleton variant="text" width={"70%"} height={"auto"} />
							<IconButton style={{ padding: "3px" }} disabled>
								<Copy06
									style={{ colors: colorsVars.primary600 }}
								/>
							</IconButton>
						</Grid>
					</Grid>
					{/*FIN Contenedor Alias y cvu */}
				</CardActions>
			</Card>
		)
	}

	return (
		<Card>
			<CardContent style={{ padding: "16px 24px 16px 24px" }}>
				<Typography variant="subtitle2">
					Datos de la cuenta
				</Typography>
			</CardContent>
			<Divider style={{ width: "100%" }} />
			<CardActions style={{ padding: "16px 24px" }}>
				<Grid container direction={"column"}>
					{/*Contenedor Alias y cvu */}
					<Grid item>
						<Typography
							variant="subtitle2"
							color={colorsVars.grey500}
						>
							Alias
						</Typography>
					</Grid>
					<Grid
						item
						container
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Typography variant="subtitle2" fontSize={"18px"}>
							{datosCuenta![0].value ?? ""}
						</Typography>
						<IconButton style={{ padding: "3px" }}>
							<Copy06
								style={{ cursor: "pointer", colors: colorsVars.primary600 }}
							/>
						</IconButton>
					</Grid>
					<Grid item xs={12}>
						<Divider style={{ width: "100%", margin: "16px 0" }} />
					</Grid>
					<Grid item>
						<Typography
							variant="subtitle2"
							color={colorsVars.grey500}
							fontSize={"18px"}
						>
							CVU
						</Typography>
					</Grid>
					<Grid
						item
						container
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Typography variant="subtitle2" fontSize={"18px"}>
							{datosCuenta![1].value}
						</Typography>
						<IconButton style={{ padding: "3px" }}>
							<Copy06
								style={{ cursor: "pointer", colors: colorsVars.primary600 }}
							/>
						</IconButton>
					</Grid>
				</Grid>
				{/*FIN Contenedor Alias y cvu */}
			</CardActions>
		</Card>
	);
}

