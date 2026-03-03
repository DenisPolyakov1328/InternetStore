'use client'
import { Box, Container, Grid } from '@mui/material'
import { useFooterColumns } from '@/shared/i18n/useFooterColumns'
import { FooterColumn } from '@/widgets/Footer/ui/FooterColumn'
import { FooterCompanyInfo } from '@/widgets/Footer/ui/FooterCompanyInfo'
import { FooterSocialLinksGroup } from '@/widgets/Footer/ui/FooterSocialLinksGroup'

const contentMap = {
  companyInfo: <FooterCompanyInfo />,
  socialLinks: <FooterSocialLinksGroup />
} as const

export const Footer = () => {
  const footerColumns = useFooterColumns()
  return (
    <Box
      component="footer"
      sx={{
        marginBottom: { xs: 7, smp: 0 },
        backgroundColor: 'custom.footer',
        color: 'grey.400'
      }}
    >
      <Container sx={{ paddingY: { xs: 4, smp: 10 }, display: 'block' }}>
        <Grid container direction="row" spacing={3}>
          {footerColumns.map((column, index) => {
            const { withCustomContent } = column
            const customContent =
              withCustomContent && contentMap[withCustomContent]
            return (
              <FooterColumn
                key={column.id}
                column={column}
                index={index}
                customContent={customContent}
              />
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
