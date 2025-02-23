export const ArchiveHeader = ({ handleShowBlurb }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            cursor: 'pointer'
        }}
            onClick={handleShowBlurb}
        >
            <h1>Queer Resource Archive</h1>
            <img src="/queerArchiveLogo.jpg" alt="logo" width={75} />

        </div >
    )
}