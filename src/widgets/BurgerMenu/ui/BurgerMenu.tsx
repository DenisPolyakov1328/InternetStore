import { CustomIconButton, DrawerWrapper } from '@/shared/ui'
import { useToggleDrawer } from '@/shared/lib/hooks'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import CloseIcon from '@mui/icons-material/Close'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@mui/material'
import { navItems } from '@/shared/config'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

export const BurgerMenu = () => {
  const { isOpen, toggle, close } = useToggleDrawer()

  return (
    <>
      <CustomIconButton icon={MenuOutlinedIcon} onClick={toggle} />
      <DrawerWrapper open={isOpen} onClose={close} anchor={'left'}>
        <Box
          sx={{
            width: '100vw',
            height: '100%',
            position: 'relative'
          }}
        >
          <OverlayScrollbarsComponent
            defer
            options={{
              scrollbars: {
                theme: 'os-theme-light',
                autoHide: 'leave',
                autoHideDelay: 200
              },
              overflow: {
                x: 'hidden',
                y: 'scroll'
              }
            }}
            style={{
              maxHeight: '100%',
              height: '100vh'
            }}
          >
            <Box
              sx={{
                position: 'relative',
                paddingY: 8,
                paddingX: 5,
                height: '100%',
                maxWidth: 500,
                margin: '0 auto'
              }}
            >
              <CustomIconButton
                icon={CloseIcon}
                onClick={close}
                sx={{ position: 'absolute', top: 15, right: 30 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {navItems.map((item) => (
                  <Accordion
                    key={item.id}
                    disableGutters
                    elevation={0}
                    sx={{
                      '&:before': { display: 'none' },
                      '&.MuiAccordion-root': {
                        border: 'none',
                        backgroundColor: 'transparent'
                      },
                      '&.Mui-expanded': { margin: 0 }
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<KeyboardArrowDownIcon />}
                      sx={{
                        p: 0,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Typography component="span" fontWeight={600}>
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 0,
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                          pl: 2
                        }}
                      >
                        {item.subCategories.map((subCategory) => (
                          <Typography
                            key={subCategory.id}
                            component="a"
                            href={subCategory.href}
                            sx={{ p: 1 }}
                          >
                            {subCategory.label}
                          </Typography>
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </OverlayScrollbarsComponent>
        </Box>
      </DrawerWrapper>
    </>
  )
}
