import time
from zapv2 import ZAPv2
import sys
import json

target = sys.argv[2]
# target = 'https://unstop.com/hackathons/flipkart-grid-60-information-security-challenge-flipkart-grid-60-flipkart-1024250?search=&page=1'
apiKey = sys.argv[1]
# apiKey = '6d5vp9lkvg318piegu67h8kv2g'
zap = ZAPv2(apikey=apiKey)
print('Spidering target {}'.format(target))
scanID = zap.spider.scan(target)
print(scanID)
while int(zap.spider.status(scanID)) < 100:
    print('Spider progress %: {}'.format(zap.spider.status(scanID)))
    time.sleep(1)

print('Spider has completed!')
print('\n'.join(map(str, zap.spider.results(scanID))))

while int(zap.pscan.records_to_scan) > 0:
    print('Records to passive scan : ' + zap.pscan.records_to_scan)
    time.sleep(2)


print('Passive Scan completed')

json_object_result = json.dumps(zap.core.alerts(),indent=4)
with open(sys.argv[3], "w") as outfile:
    outfile.write(json_object_result)

print('Hosts: {}'.format(', '.join(zap.core.hosts)))

print('Alerts: ')
# print(zap.core.alerts())
sys.stdout.flush()