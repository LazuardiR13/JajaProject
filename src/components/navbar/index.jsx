import { Menu, Space } from 'antd'
import React from 'react'
import { SearchItem } from '@components'

const Navbar = () => {
  return (
    <div className='flex'>
      <img src={require('./img/logo.png')} />
      <Menu
        mode='horizontal'
        items={[
          {
            label: "READ",
            key: "READ",
            
            children: [
              {
                label: <MegaMenuRead />,
                key: "MegaMenuRead",
                style: {
                  height: "fit-content",
                  width: "1112px"
                },
              },
            ]
          },

          {
            label: "SHOP",
            key: "Shop",
            children: [
              {
                label: <MegaMenuShop />,
                key: "MegaMenuShop",
                style: {
                  height: "fit-content",
                  width: "1112px",

                }
              },
            ]
          },
          {
            label:"NEWSLETTER",
            key:"Newletter"
          },
          {
            label:"PODCAST",
            key:"Podcast"
          },
          {
            label:"FIND A JOB",
            key:"FindAJob"
          }

        ]}
        style={{ boxShadow: "none", border: "none", fontSize: "18px", paddingTop:"25px" }}
      />
      <div className='mt-7 ml-48'>
      <SearchItem/>
      </div>
    </div>
  )
}
function MegaMenuRead() {
  return <div>
    <Space direction="horizontal">
      <Menu items={[
        {
          label: 'How To',
          key: "HowTo",
        },
        {
          label: 'Wellness',
          key: "Wellness",
        }
      ]}
        style={{ boxShadow: "none", border: "none", fontSize: "18px" }}
      />
      <Menu items={[
        {
          label: 'Trends',
          key: "Trends",
        },
        {
          label: 'Sucess Stories',
          key: "SucessStories",
        }
      ]}
        style={{ boxShadow: "none", border: "none", fontSize: "18px" }}
      />
    </Space>
  </div>
}
function MegaMenuShop() {
  return <div style={{ backgroundColor: "white" }}>
    <Space direction="horizontal">
      <Menu items={[
        {
          label: "Shop All",
          key: "ShopAll",
          style: {
            fontSize: "23px",
            fontWeight: "bold"
          }

        },
        {
          label: "New Arrival",
          key: "NewArrival",

        },
        {
          label: "Best Sellers",
          key: "BestSellers",

        },
        {
          label: "Under $50",
          key: "Under50",

        },
        {
          label: "Under $100",
          key: "Under100",

        },
      ]}
        style={{ boxShadow: "none", border: "none", fontSize: "18px" }}
      />
      <Menu items={[
        {
          label: "Collections",
          key: "Collections",
          style: {
            fontSize: "23px",
            fontWeight: "bold"
          }
        },
        {
          label: "Work",
          key: "Work",

        },
        {
          label: "Wellness",
          key: "Wellness",

        },
        {
          label: "Fashion",
          key: "Fashion",

        },
        {
          label: "Beauty",
          key: "Beauty",

        },
      ]}
        style={{ boxShadow: "none", border: "none", fontSize: "18px" }}
      />
      <Menu items={[
        {
          label: "Shop By",
          key: "ShopBy",
          style: {
            fontSize: "23px",
            fontWeight: "bold"
          }
        },
        {
          label: "BIPOC",
          key: "Bipoc",

        },
        {
          label: "Gifting",
          key: "Gifting",

        },
        {
          label: "",
          key: "",
          disabled: "true"

        },
        {
          label: "",
          key: "",
          disabled: "true"

        },
      ]}
        style={{ boxShadow: "none", border: "none", fontSize: "18px" }}
      />
    </Space>
  </div>
}

export default Navbar