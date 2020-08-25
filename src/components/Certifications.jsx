import React from 'react'
import styles from './cert.module.css'
import Certificates from '../portfolio-data/certs.json'

export default function Certifications() {

    const certs = Certificates.map(item => {
        return(
            <div key={item.cert_url} className={styles.item}>
                <a href={item.cert_url} target="_blank" rel="noopener noreferrer">
                    <h3>{item.name}</h3>
                    <p>Issuer: {item.issuer}</p>
                    <p>Issued: {item.issued}</p>
                    <p>Expires: {item.expires}</p>
                </a>
            </div>
        )
    })

    return(
        <div className={styles.container}>
            <h3 align="center" id={styles.header}>Certifications</h3>
            <div className={styles.itemContainer}>
                {certs}
            </div>
        </div>
    )
}