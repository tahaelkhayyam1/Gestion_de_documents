export default function SecretaireDashboard() {
    // Styles définis comme objets JavaScript
    const styles = {
        dashboard: {
            padding: '20px',
            backgroundColor: '#f4f4f4',
        },
        section: {
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        header: {
            marginBottom: '10px',
        }
    };

    return (
        <div style={styles.dashboard}>
            <h2>Tableau de Bord de la Secrétaire</h2>
            <div className="dashboard-sections">
                <section style={styles.section}>
                    <h3 style={styles.header}>Gestion des Demandes</h3>
                    {/* Liste des demandes de documents */}
                </section>
                <section style={styles.section}>
                    <h3 style={styles.header}>Informations des Étudiants</h3>
                    {/* Informations des étudiants */}
                </section>
                <section style={styles.section}>
                    <h3 style={styles.header}>Tâches Administratives</h3>
                    {/* Tâches administratives */}
                </section>
            </div>
        </div>
    );
}
