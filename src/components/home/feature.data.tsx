import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Accès Facile',
    description: 'Nos cours sont accessibles à tout moment, vous permettant d\'étudier à votre rythme et selon vos disponibilités',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Diversité des cours',
    description: 'Choisissez parmi une large gamme de cours adaptés à différents domaines et niveaux de compétence.',
    icon: <PlayLessonIcon />,
  },
  {
    title: 'Étude à votre rythme',
    description: 'Profitez de la flexibilité de nos programmes pour apprendre à votre propre vitesse, selon vos contraintes et préférences personnelles.',
    icon: <DirectionsRunIcon />,
  },
  {
    title: 'Suivi de progression',
    description: 'Bénéficiez d\'un suivi adapté à vos progrès et recevez des retours constructifs pour vous améliorer continuellement, assurant ainsi un apprentissage optimal et motivant.',
    icon: <PublishedWithChangesIcon />,
  },
]
