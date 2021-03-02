import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span><strong>0 xp</strong></span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}`  }}>
                <strong>{currentExperience} xp</strong>
                </span>
            </div>
            <span><strong>{experienceToNextLevel} xp</strong></span>
        </header>
    );
}