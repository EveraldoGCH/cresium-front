"use client";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import {
	CardActions,
	CardContent,
	Divider,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import { Copy06 } from "../../../../../public/assets/iconsComponents/iconsComponents";

export function CardDatosCuenta(): React.JSX.Element {
	return (
		<Card>
			<CardContent style={{ padding: "16px 24px 16px 24px" }}>
				<Typography variant="subtitle2">
					Datos de la cuenta
				</Typography>
			</CardContent>
			<Divider style={{ width: "100%" }} />
			<CardActions style={{ padding: "24px" }}>
				<Grid container direction={"column"}>
					{/*Contenedor Alias y cvu */}
					<Grid item>
						<Typography
							variant="subtitle2"
							color={stylesVars.grey500}
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
							cresiumapp
						</Typography>
						<IconButton style={{ padding: "3px" }}>
							<Copy06
								style={{ cursor: "pointer", colors: stylesVars.primary600 }}
							/>
						</IconButton>
					</Grid>
					<Grid item xs={12}>
						<Divider style={{ width: "100%", margin: "16px 0" }} />
					</Grid>
					<Grid item>
						<Typography
							variant="subtitle2"
							color={stylesVars.grey500}
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
							1234567890123456789
						</Typography>
						<IconButton style={{ padding: "3px" }}>
							<Copy06
								style={{ cursor: "pointer", colors: stylesVars.primary600 }}
							/>
						</IconButton>
					</Grid>
				</Grid>
				{/*FIN Contenedor Alias y cvu */}
			</CardActions>
		</Card>
	);
}

