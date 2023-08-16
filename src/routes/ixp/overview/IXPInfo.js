import { Typography } from 'antd';

const { Title, Text } = Typography;

const IXPInfo = ({ ixpData }) => {
  return (
    <div>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 2}}>
          {ixpData.name}
        </Title>
        <Title level={4} style={{ textAlign: 'center', marginBottom: 2, marginTop: 1 }}>
          {ixpData.long_name}
        </Title>
        <Text strong style={{ display: 'block', textAlign: 'center', marginBottom: 10 }}>
          Founded Year: {ixpData.founded_year}
        </Text>
        <Text style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>
          City: {ixpData.city}
        </Text>
        <Text style={{ display: 'block', textAlign: 'center', marginBottom: 8}}>
          Website: <a href={ixpData.website} target="_blank" rel="noreferrer">{ixpData.website}</a>
        </Text>
    </div>
  );
};

export default IXPInfo;
