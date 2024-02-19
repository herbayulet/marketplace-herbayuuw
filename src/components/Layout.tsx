import { View } from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
  styling?: string;
}

export const Layout = ({ children, styling }: LayoutProps) => {
  return <View className={`${styles.layouting} ${styling}`}>{children}</View>;
};

const styles = {
  layouting: 'flex flex-1 py-3',
};
