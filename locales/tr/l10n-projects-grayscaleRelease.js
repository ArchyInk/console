/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
module.exports = {
  // Banner
  GRAYSCALE_RELEASE: 'Gri Tonlamalı Yayın',
  // Release Modes
  BLUE_GREEN_DEPLOYMENT: 'Mavi-Yeşil Dağıtım',
  CANARY_RELEASE: 'Kanarya Yayını',
  TRAFFIC_MIRRORING: 'Trafik Yansıtma',
  BLUE_GREEN_DEPLOYMENT_DESC: 'Hizmet trafiğini test için yeni sürüme gönderin. Yeni sürüm düzgün çalışmıyorsa, servis trafiğini hemen eski sürüme geçirebilirsiniz.',
  CANARY_RELEASE_DESC: 'Hem yeni sürümü test etmek hem de hizmet sürekliliğini sağlamak için hizmet trafiğini yeni sürüm ve eski sürüm arasında tahsis edin.',
  TRAFFIC_MIRRORING_DESC: 'Yeni sürümü gerçekten göstermeden test için hizmet trafiğinin bir kopyasını yeni sürüme gönderin.',
  // Release Modes > Blue-Green Deployment > Create > Basic Information
  CREATE_BLUE_GREEN_DEPLOYMENT_JOB: 'Mavi-Yeşil Dağıtım İşi Oluşturun',
  // Release Modes > Blue-Green Deployment > Create > Service Settings
  DESELECT: 'Seçimi İptal Et',
  SELECT: 'Seçiniz',
  SELECT_GRAY_COMPONENT_TIP: 'Lütfen bir hizmet seçin.',
  // Release Modes > Blue-Green Deployment > Create > New Version Settings
  REPLICA: 'Kopya',
  REPLICA_PL: 'Kopyalar',
  GRAYSCALE_REPLICAS_DESC: 'Yeni sürümdeki Pod kopyaları',
  // Release Modes > Blue-Green Deployment > Create > Strategy Settings
  SELECT_VERSION: 'Versiyon Seçin',
  BLUE_GREEN_STRATEGY_DESC: 'Tüm hizmet trafiğini devralacak bir sürüm seçin.',
  TAKE_OFFLINE: 'Çevrimdışı Ol',
  TAKE_OVER: 'Devral',
  GRAYSCALE_VERSION: 'Sürüm: {{version}}',
  // Release Modes > Canary Release > Create
  CREATE_CANARY_RELEASE_JOB: 'Kanarya Yayın İşi Oluştur',
  // Release Modes > Canary Release > Create > Service Settings
  UNFINISHED_GRAY_JOB: 'Gri tonlamalı sürüm devam ediyor',
  NO_SERVICE_MESH_TIP: 'Uygulama için uygulama yönetişimi devre dışı bırakıldı ve gri tonlamalı sürüm kullanılamaz.',
  GRAY_APP_NAME: 'Uygulama:{name}',
  UNSUPPORTED_WORKLOAD_TYPE: 'İş yükü türü desteklenmiyor',
  // Release Modes > Canary Release > Create > New Version Settings
  NEW_VERSION_NUMBER_EXIST_DESC: '{name} iş yükü zaten var. Lütfen başka bir sürüm numarası girin.',
  INIT_CONTAINER: 'Başlangıç konteyneri',
  INIT_CONTAINER_VALUE: 'Başlangıç Konyetner:{value}',
  CONTAINER_VALUE: 'Konteyner:{value}',
  GRAYSCALE_IMAGE: 'Resim:{image}',
  NEW_VERSION_NUMBER: 'Yeni Sürüm Numarası',
  NEW_VERSION_NUMBER_EMPTY_DESC: 'Lütfen yeni bir sürüm numarası girin.',
  NEW_VERSION_SETTINGS: 'Yeni Versiyon Ayarları',
  NEW_VERSION_NUMBER_DESC: 'Yeni sürüm numarası yalnızca küçük harf ve rakamlardan oluşabilir. Maksimum uzunluk 16 karakterdir.',
  NEW_VERSION_NUMBER_INVALID_DESC: 'Geçersiz yeni sürüm numarası. Yeni sürüm numarası yalnızca küçük harf ve rakamlardan oluşabilir. Maksimum uzunluk 16 karakterdir.',
  // Release Modes > Canary Release > Create > Strategy Settings > Specify Request Parameters
  KEY_EQ_VALUE: 'Anahtar=Değer',
  HEADER: 'Başlık',
  CLIENT_OS: 'İstemci işletim sistemi',
  COOKIE: 'Çerez',
  SPECIFY_REQUEST_PARAMETERS_DESC: 'Aşağıdaki koşulları sağlayan istekler yeni sürüme gönderilir.',
  POLICY_REQUEST_CONTENT_TIP: 'İstek Parametrelerini Belirt işlevi yalnızca HTTP, HTTPS ve gRPG isteklerini destekler.',
  SPECIFY_REQUEST_PARAMETERS: 'İstek Parametrelerini Belirtin',
  REQUEST_PARAMETERS: 'Parametreleri Talep Et',
  EXACT_MATCH: 'Tam eşleşme',
  PREFIX_MATCH: 'Önek eşleşmesi',
  REGEX_MATCH: 'Normal ifade eşleşmesi',
  // Release Modes > Canary Release > Create > Strategy Settings > Specify Traffic Distribution
  CANARY_BY_TRAFFIC_DESC: '<b>{component}</b> hizmetine bağlı trafiğin %{ratio}%\'si, <b>{newVersion}</b> yeni sürümüne gönderilir.',
  SPECIFY_TRAFFIC_DISTRIBUTION: 'Trafik Dağıtımını Belirtin',
  TRAFFIC: 'Trafik',
  TRAFFIC_DISTRIBUTION: 'Trafik Dağılımı',
  // Release Modes > Traffic Mirroring > Create
  CREATE_TRAFFIC_MIRRORING_JOB: 'Trafik Yansıtma İşi Oluştur',
  // Release Modes > Traffic Mirroring > Create > Strategy Settings
  // Release Jobs
  PREREQUEST_FOR_USE_GRAYRELEASE_Q: 'Gri tonlamalı sürümü uygulamak için ön koşullar nelerdir?',
  PREREQUEST_FOR_USE_GRAYRELEASE_A: 'Gri tonlamalı sürümü uygulamadan önce, oluşturulmuş bir uygulama oluşturmanız ve uygulama için uygulama yönetimini etkinleştirmeniz gerekir.',
  RELEASE_JOBS: 'İşleri Yayınla',
  TCP_INBOUND_TRAFFIC: 'TCP Gelen Trafik',
  TCP_OUTBOUND_TRAFFIC: 'TCP Giden Trafik',
  NO_DATA_SCAP: 'Veri bulunamadı',
  REPLICA_COUNT_LOW: 'kopyalar',
  MIRROR_POLICY_DESC: 'Hizmet trafiğinin bir kopyası, test için yeni sürüme gönderilir. Yalnızca eski sürüm gösterilir ve yeni sürüm gösterilmez.',
  // Release Jobs > Blue-Green Deployment > Job Status
  BLUE_GREEN_TRAFFIC_DISTRI_DESC: 'Yeni sürüm veya eski sürüm tüm trafiği alır.',
  TRAFFIC_LOW: 'trafik',
  VERSION_TRAFFIC_PERCENT: '{version} trafik {percent}%',
  // Release Jobs > Canary Release > Job Status
  JOB_OFFLINE_SUCCESSFULLY: 'Çevrimdışı iş başarıyla tamamlandı.',
  JOB_STATUS: 'İş Durumu',
  ADJUST_TRAFFIC_DISTRIBUTION_DESC: 'Trafiğin %{ratioNew}%\'sini yeni <b>{newVersion}</b> sürümüne ve %{ratioOld}%\'unu eski <b>{oldVersion}</b> sürümüne göndermek istediğinizden emin misiniz?',
  ALLOCATE_TRAFFIC_DESC: 'Yeni sürüme gönderilen ve eski sürüme gönderilen trafiğin oranını ayarlamak için kaydırıcıyı hareket ettirin.',
  COOKIE_EXACT_MATCH: 'Çerez (tam eşleşme)',
  COOKIE_REGEX_MATCH: 'Cookie (regex match)',
  HEADER_EXACT_MATCH: 'Header (exact match)',
  HEADER_REGEX_MATCH: 'Header (regex match)',
  URL_PREFIX_MATCH: 'URL (prefix match)',
  URL_EXACT_MATCH: 'URL (regex match)',
  OS: 'OS',
  SERVICE_VERSION_RECEIVE_ALL_TRAFFIC: 'The version <b>{version}</b> has taken over all traffic.',
  RESTORE: 'Restore',
  SUCCESSFUL_REQUEST_RATE: 'Successful Request Rate',
  TRAFFIC_IN_LAST_FIVE_MINUTES: 'Traffic in last five minutes.',
  DELETE_GRAYSCALE_RELEASE_JOB_DESC: 'Please select a version to take over all traffic before deleting the grayscale release job.',
  GRAY_COMPONENT_DESC: 'Information about the new version being tested and the old version.',
  // Release Jobs > Traffic Mirroring > Job Status
  MIRRORED_TRAFFIC: 'Mirrored traffic',
  RELEASE_MODE_PL: 'Release Modes',
  RELEASE_MODE: 'Release mode',
  NEW_VERSION_TAKEOVER_DESC: 'The new version <b>{newVersion}</b> is receiving all traffic. If you delete the current grayscale release job, the old version <b>{oldVersion}</b> will be also be deleted.',
  OLD_VERSION_TAKEOVER_DESC: 'The old version <b>{oldVersion}</b> is receiving all traffic. If you delete the current grayscale release job, the new version <b>{newVersion}</b> will be also be deleted.',
  GRAYSCALE_REPLICA_SI: 'Replica: {count}',
  GRAYSCALE_REPLICA_PL: 'Replicas: {count}',
  TRAFFIC_MIRRORING_TRAFFIC_DISTRI_DESC: 'A copy of traffic is sent to the new version for testing.',
  // Release Jobs > Job Status > Edit
  EDIT_GRAYSCALE_RELEASE_JOB: 'Edit Grayscale Release Job',
  // Release Jobs > Canary Release > Traffic Distribution
  ADJUST_TRAFFIC_DISTRIBUTION: 'Adjust Traffic Distribution'
};