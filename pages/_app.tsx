import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }: AppProps) {
  return<>
   <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,
        colorTextHeading: '#FFFFFF',
        fontSize: 17,    
        
        // Alias Token
        colorBgContainer: '#FFFFFF',
        colorTextLabel: '#FFFFFF',
        colorTextPlaceholder: 'gray',
      },
    }}
  ><Component {...pageProps} />
  </ConfigProvider>
  
  </> 
}
