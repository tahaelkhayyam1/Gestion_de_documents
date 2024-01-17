import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useStateContext } from "../../contexts/Context";

const Users = () => {
    const { user } = useStateContext();

    return (
        <div style={{ margin: '20px' }}>
            <h1>Informations de leleve</h1>
            {user ? (
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary">Nom : {user.name}</Typography>
                        <Typography color="textSecondary">Email : {user.email}</Typography>
                        <Typography color="textSecondary">Rôle : {user.role}</Typography>
                        <Typography color="textSecondary">Paiement Status :     <small>
                            {user.paiement_status}% payed
                        </small></Typography>
                        <div className="progress progress-sm">
                            <br />
                            <br />
                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow={user.paiement_status} aria-valuemin={0} aria-valuemax={100} style={{ width: `${user.paiement_status}%` }}>
                            </div>
                        </div>


                    </CardContent>
                </Card>
            ) : (
                <Typography color="error">Aucun utilisateur connecté</Typography>
            )}
        </div>
    );
};

export default Users;
