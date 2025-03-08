import app from '../../assets/images/smart_fit_app-BR.png'
import qrCode from '../../assets/images/qrcode.png'
import { AppContainer, AppFoto, AppInfo } from './styles'

const SmartApp = () => (
  <AppContainer>
    <AppInfo>
      <h1>
        SmartFit App: <br /> Seu aliado nos treinos
      </h1>
      <ul>
        <li>Confira seu treino personalizado completo</li>
        <li>Veja a execução dos exercícios em vídeo</li>
        <li>Acompanhe o progresso de carga</li>
        <li>Acesse 60 treinos mesmo se não for nosso aluno</li>
        <li>Compre ou faça upgrade de plano</li>
      </ul>
      <br />
      <h4>Tudo isso de graça</h4>
      <br />
      <p>Baixe agora o Smart Fit App</p>
      <br />
      <img src={qrCode} alt="QR CODE" />
    </AppInfo>
    <AppFoto>
      <img src={app} alt="foto app" />
    </AppFoto>
  </AppContainer>
)

export default SmartApp
