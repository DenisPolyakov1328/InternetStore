import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { FooterLink } from '@/shared/ui/FooterLink'
import { FooterColumn as FooterColumnType } from '@/shared/types/footer'

interface FooterColumnProps {
  column: FooterColumnType
  index: number
  customContent?: React.ReactNode
}

export const FooterColumn = ({
  column,
  index,
  customContent
}: FooterColumnProps) => {
  const gridLgpColumns = index === 0 ? 4 : index === 1 ? 2 : 3

  return (
    <Grid key={column.id} size={{ xs: 12, smp: 6, lgp: gridLgpColumns }}>
      {column.title && (
        <Typography
          variant="h6"
          sx={{ color: 'secondary.contrastText', mb: 1.5 }}
        >
          {column.title}
        </Typography>
      )}

      {column.items?.map((item) => (
        <FooterLink key={item.id} label={item.label} href={item.href} />
      ))}

      {customContent}
    </Grid>
  )
}
