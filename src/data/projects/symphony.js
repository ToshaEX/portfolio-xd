import { project, techStack } from '../../constants';
import Symphony from '../../assets/projects/symphony';

export const symphony = {
  name: 'Symphony',
  overview: 'Payment Gateway Software by Ideahub',
  isLive: false,
  images: [...Symphony],
  date: '2023 FEB',
  techStack: [
    techStack.REACT,
    techStack.TYPESCRIPT,
    techStack.JAVASCRIPT,
    techStack.PHP,
    techStack.LAMINAS,
    techStack.NESTJS,
    techStack.ORACLEDB,
    techStack.POSTGRESSQL,
  ],
  type: project.PRODUCT,
  description: [
    `Symphony is built from the ground up for Financial Services Organisations and Telco’s who are looking for their own, branded digital payment platform and fully immersive ‘Life’Tech. The combination of FinTech, Digital Banking and Customer Loyalty capabilities in one platform is unique to Symphony. Symphony helps users to maintain their virtual wallets, pay to merchants/payees conveniently, connect with existing banking functions, discover new shopping experiences (deals, coupons and vouchers), take part in special promotions and loyalty programs, and stay in touch with family and friends (chat, share credit, split pay and gift). With a few taps on a smartphone, users can access a range of financial, social and lifestyle features and securely make purchases.`,
    `Managed product maintenance and customer requests for the Symphony product, working for reputed clients including Dialog and DFCC Bank`,
  ],
  functions: [
    'Create CRUD operations',
    'Implement approval modules',
  ],
};
